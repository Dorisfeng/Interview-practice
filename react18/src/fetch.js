export function fetchData() {
  let userPromise = fetchUser();
  let postsPromise = fetchPosts();
  let numPromise = fetchNum();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
    num: wrapPromise(numPromise),
  };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchUser() {
  console.log("fetch user...");
  return fetch("https://randomuser.me/api")
    .then((x) => x.json())
    .then((x) => x.results[0]);
}

function fetchPosts() {
  console.log("fetch posts...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched posts");
      resolve([
        {
          id: 0,
          text: "I get by with a little help from my friends",
        },
        {
          id: 1,
          text: "I'd like to be under the sea in an octupus's garden",
        },
        {
          id: 2,
          text: "You got that sand all over your feet",
        },
      ]);
    }, 1100);
  });
}
function fetchNum() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
}
