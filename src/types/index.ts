export interface IContent {
  id: string;
  title: {
    en: string;
    ru: string;
    uz: string;
  };
  description: string | null;
  videoUrl: string;
  cloudinaryPublicId: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface IContentResponse {
  data: IContent[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
