import React, { Component } from "react";
import { Colors, Fonts } from "../constants/styles";
import { Images } from "../constants/assets";
import { HomeContext, HomeProvider } from "../context/HomeContext";
import { Link } from "react-router-dom";

import TodoApp from "../components/Todo";
import { Image, Table } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HomeProvider>
        <HomeChild />
      </HomeProvider>
    );
  }
}

class HomeChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = HomeContext;
  render() {
    const { grade, books } = this.context;
    return (
      <div>
        <section>
          <TodoApp />
        </section>
        <section>
          <p style={Fonts.largeGray}>Books</p>
          <div style={styles.bookGrid}>
            {books.map((book, index) => (
              <Link key={index} to="details">
                <div style={styles.bookContainer}>
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "100%",
                    }}
                  >
                    <Image
                      src={book.picture.pictures[0]}
                      style={{ width: "200px", height: "300px" }}
                    />
                  </div>
                  <p style={Fonts.normalGrayBold}>{book.title}</p>
                  <p style={Fonts.smallGray}>
                    {book.author.firstName + " " + book.author.lastName}
                  </p>
                  <p style={Fonts.smallGray}>
                    {new Date(book.date).toUTCString().substring(5, 16)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <p style={Fonts.largeGray}>Favorite games</p>
          <div style={styles.gridContainer}>
            <div style={styles.img1}>
              <div style={styles.card}>
                <p style={Fonts.smallWhiteBold}>Dota 2</p>
              </div>
            </div>
            <div style={styles.img2}>
              <div style={styles.card}>
                <p style={Fonts.smallWhiteBold}>CS GO</p>
              </div>
            </div>
            <div style={styles.img3}>
              <div style={styles.card}>
                <p style={Fonts.smallWhiteBold}>Chess</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p style={Fonts.largeGray}>Grades</p>
          <Table className="mt-4" bordered size="sm">
            <thead style={Fonts.smallGray}>
              <tr>
                <td>#</td>
                <td>Lesson code</td>
                <td>Lesson name</td>
                <td>Credit</td>
                <td>70</td>
                <td>30</td>
                <td>Total</td>
                <td>Letter</td>
              </tr>
            </thead>
            <tbody style={Fonts.smallGray}>
              {grade.map((lesson, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{lesson.lesson_code}</td>
                  <td>{lesson.lesson_name}</td>
                  <td>{lesson.lesson_credit}</td>
                  <td>{lesson.seventy_grade}</td>
                  <td>{lesson.thirty_exam_grade}</td>
                  <td>{lesson.total_grade}</td>
                  <td>{lesson.letter_grade}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    );
  }
}

const styles = {
  timer: {
    textAlign: "right",
  },
  gridContainer: {
    margin: "20px 0",
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "auto auto auto",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // display: "grid",
    // placeItems: "center",
    height: "300px",
    borderRadius: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  img1: {
    backgroundImage: `url(${Images.dota2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  },
  img2: {
    backgroundImage: `url(${Images.csgo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  },
  img3: {
    backgroundImage: `url(${Images.chess})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  },
  bookGrid: {
    margin: "20px 0",
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "auto auto auto ",
  },
  bookContainer: {
    display: "grid",
    placeItems: "start",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: Colors.containerBackColor,
    borderRadius: "10px",
    padding: "10px",
  },
};
