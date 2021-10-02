const ChapterUpdateProgress = () => {
  const chapters = [];
  for (let i = 1; i < 31; i += 1) {
    const chapter = `Chapter ${i}`;

    chapters.push(chapter);
  }

  const randomChapter = Math.floor(Math.random() * (chapters.length - 1));

  return (
    <div className="ChapterUPContainer">
      <div>
        <p className="fontStyle4 fontColor1 mb05">Current Chapter</p>
        <p className="fontStyle3 fontColor1 mb1">{chapters[randomChapter]}</p>
      </div>
      <div>
        <button className="appDefaultButton fontStyle4 fontColor5" type="button">Update Progress</button>
      </div>
    </div>
  );
};

export default ChapterUpdateProgress;
