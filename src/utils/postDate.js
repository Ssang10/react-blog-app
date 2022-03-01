const postDate = (fullDate) => {
  return `${fullDate.split(" ").splice(1, 2).join(" ")}, 
      ${fullDate.split(" ").splice(3, 1).join(" ")}`;
};

export default postDate;
