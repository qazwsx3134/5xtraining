/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' }).catch(() => { setError(true); });
      const data = await res.json();

      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (error === true) {
      throw new Error('API cant get the Data');
    }
  });

  // Pagination
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  // 換頁
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (

    <div>
      {loading ? <h3 style={{ textAlign: 'center' }}>loading</h3>
        : (
          <div className="posts-category pb-3 overwrite-posts">


            {currentPosts.map((post) => (
              <div key={post.id} className="posts-lists-partial mt-2">
                <div className="container mb-2 ">
                  <div className="row">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 center-block">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
                            <div className="posts-wrap light-grey-bg list-item">

                              <div className="mt-2">
                                <h3><strong>{post.title}</strong></h3>
                              </div>

                              <div className="summary mt-3 mb-3">
                                <p>{post.body}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            ))}

            <Pagination
              postPerPage={postPerPage}
              currentPage={currentPage}
              totalPosts={posts.length}
              paginate={paginate}
            />

          </div>
        )}

    </div>

  );
};

export default Post;
