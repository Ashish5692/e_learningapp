import React from "react";
import styles from "./Chapter.module.css";
import { useParams, useOutletContext } from "react-router-dom";

function Chapter() {

  // getting all chapter Ids i.e 1,2,3..
  const {chapterId} = useParams();
  // getting details of course from useOutletcontext
  const course = useOutletContext();

  //now seeing which chapter is there if id of course matches with the id of {chapterId} then we will store that chapter here
  const chapter = course.chapters.find((chapter)=> String(chapter.chapter) === chapterId); //chapter.chapter id is a number but whatever we recieved from params it is in form of "strings",,chapterId is string, so convert one of them
  //as inside chapters i need to find whether it is chapter1,2,or3


  return (
    <div>
      <h1>{chapter.title}</h1>
      <hr/>
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src="" //currently we dont have videos right now
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
