import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { instanse } from "../config/axios";
import type { IContent, IContentResponse } from "../types";

export const contentApi = {
  getContent: async (
    page: number,
    limit: number = 10
  ): Promise<IContentResponse> => {
    const res = await instanse.get(
      `/useful-content?page=${page}&limit=${limit}`
    );
    return res.data;
  },
};

interface ContentState {
  content: IContent[];
  loading: boolean;
  error: string | null;
  meta: IContentResponse["meta"] | null;
  hasMore: boolean;
  page: number;
}

const initialState: ContentState = {
  content: [],
  loading: false,
  error: null,
  meta: null,
  hasMore: true,
  page: 1,
};

export const fetchContent = createAsyncThunk(
  "content/getAll",
  async (page: number = 1, { rejectWithValue }) => {
    try {
      const response = await contentApi.getContent(page);
      return {
        response,
        page,
      };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch content";
      return rejectWithValue(errorMessage);
    }
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearContent: (state) => {
      state.content = [];
      state.meta = null;
      state.hasMore = true;
      state.page = 1;
    },
    resetPagination: (state) => {
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchContent.fulfilled,
        (
          state,
          action: PayloadAction<{
            response: IContentResponse;
            page: number;
          }>
        ) => {
          const { response, page } = action.payload;
          state.loading = false;

          if (page === 1) {
            state.content = response.data;
          } else {
            state.content = [...state.content, ...response.data];
          }

          state.meta = response.meta;
          state.page = page;
          state.hasMore = response.meta.hasNext;
        }
      )
      .addCase(fetchContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearContent, resetPagination } =
  contentSlice.actions;
export default contentSlice.reducer;
