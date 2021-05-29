async function newPostFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();

    if (title && content) {
        fetch("/api/posts", {
          method: "post",
          body: JSON.stringify({
            title,
            content,
          }),
          headers: { "Content-Type": "application/json" },
        }).then((response) => {
          console.log(response);
          if (response.ok) {
            document.location.replace("/dashboard/");
          } else {
            alert(response.statusText);
          }
        });
      }
}
document
  .querySelector(".newpost-form")
  .addEventListener("submit", newPostFormHandler);