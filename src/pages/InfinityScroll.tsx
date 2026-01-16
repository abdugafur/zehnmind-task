import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { fetchContent, resetPagination } from "../redux/slice";
import styles from "./styles.module.css";
import ContentCard from "../components/Card";
import type { IContent } from "../types";

export const InfinityScroll = () => {
  const dispatch = useAppDispatch();
  const { content, loading, error, hasMore, page } = useAppSelector(
    (state) => state.content
  );

  useEffect(() => {
    dispatch(resetPagination());
    dispatch(fetchContent(1));
  }, [dispatch]);

  const loadMore = useCallback(() => {
    if (hasMore && !loading) dispatch(fetchContent(page + 1));
  }, [dispatch, hasMore, loading, page]);

  const loadingRef = useInfiniteScroll({
    onLoadMore: loadMore,
    hasMore,
    loading,
    threshold: 400,
  });

  return (
    <>
      <h1 className={styles.title}>Videos</h1>
      <section>
        {content.map((item: IContent) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </section>

      {!loading && error && content.length === 0 && (
        <div>
          <h3>Failed to load content</h3>
          <p>{error}</p>
          <button
            onClick={() => {
              dispatch(resetPagination());
              dispatch(fetchContent(1));
            }}
          >
            Try Again
          </button>
        </div>
      )}
      {!loading && !error && content.length === 0 && (
        <div>
          <h3>No Content Yet</h3>
          <p>Check back later for new videos</p>
        </div>
      )}
      <div ref={loadingRef}>
        {loading && content.length > 0 && "loading...."}
      </div>
    </>
  );
};
