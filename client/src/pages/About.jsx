/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Bahoz' Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to the Bahoz blog! This blog was created by Bahoz as part
              of a personal full-stack project to continue learning the MERN
              stack. Bahoz is a passionate developer who loves writing about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog you will find weekly articles on topics such as web
              development and programming in general. Bahoz is always learning
              and exploring new technologies, so be sure to come back often for
              new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and interact with
              other readers. You can like and respond to other people's comments
              as well. We believe that a community of learners can help each
              other grow and improve.
            </p>
            <p>
              This blog was heavily inspired and taken from developer <a className="text-red-900 dark:text-red-300 hover:underline" href="https://www.youtube.com/@reactproject/videos" target="_blank">Sahand</a>, a
              great developer who shares a lot of dev content on his channel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
