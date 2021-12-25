import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Books from "./Books";
import PaginationComp from "./PaginationComp";
import NavabarComp from "./NavabarComp";
import Footer from "./Footer";

const Library = () => {
  const history = useHistory();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(20);
  const [userData, setUserData] = useState([]);

  const callLibrary = async () => {
    try {
      const res = await fetch("http://localhost:5000/library", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  const fetchBooks = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/books", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setBooks(data);
    setLoading(false);
  };

  useEffect(() => {
    callLibrary();
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
   * Get current Books
   */
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  /*
   * Change Page
   */
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <NavabarComp />
      <Container>
        <Books books={currentBooks} loading={loading} user={userData} />
        <PaginationComp
          booksPerPage={booksPerPage}
          totalBooks={books.length}
          paginate={paginate}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Library;
