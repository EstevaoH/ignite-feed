import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Post } from "./Components/Post/Post";
import style from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/estevaoh.png",
      name: "Estevão Ferreira adfa",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          " no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-02-02 12:11:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1594740585755189249/PMazHMZS_normal.jpg",
      name: "Nayele Costa",
      role: "UX Design",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          " no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-05-02 13:11:30"),
  },
];

export function App() {
  return (
    <div className="">
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
