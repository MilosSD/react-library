import { useEffect, useState } from 'react';
import ReviewModel from '../../../models/ReviewModel';
export const ReviewListPage = () => {

    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewsPage, setReviewsPage] = useState(5);
    const [totalAmountOfReviews, setTotalAmountOfReviews] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const bookId = (window.location.pathname).split('/')[2];

    useEffect(()=> {
        const fetchBookReviews = async () => {
    
          const reviewUrl: string = `http://localhost:8080/api/reviews/search/findByBookId?bookId=${bookId}&page=${currentPage - 1}&size=${reviewsPage}`;
    
          const responseReviews = await fetch(reviewUrl);
    
          if(!responseReviews.ok){
            throw new Error('Something went wrong!')
          }
    
          const responseJsonReviews = await responseReviews.json();
    
          const responseData = responseJsonReviews._embedded.reviews;

          setTotalAmountOfReviews(responseJsonReviews.page.totalElements);
          setTotalPages(responseJsonReviews.page.totalPages);
    
          const loadedreviews: ReviewModel [] = [];
    
          for (const key in responseData) {
            loadedreviews.push({
              id: responseData[key].id,
              userEmail: responseData[key].userEmail,
              date: responseData[key].date,
              rating: responseData[key].rating,
              book_id: responseData[key].bookId,
              reviewDescription: responseData[key].reviewDescription,
    
            });
          }
    
          setReviews(loadedreviews);
          setIsLoading(false);
        };
    
        fetchBookReviews().catch((error: any) => {
          setIsLoading(false);
          setHttpError(error.message);
        })
      }, [currentPage]);

    return ();
}