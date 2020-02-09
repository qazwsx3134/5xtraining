import React from 'react'
import Nav from '../components/nav/Nav'
import Banner from "../components/Banner/Banner";
import Post from "../components/Post/Post";
import ErrorBoundary from "../components/Post/ErrorBoundary";
import Footer from "../components/Footer/Footer"

const Posts = () => {
    return (
        <div>
            <header className="nav-space" >
                <Nav page={'posts'}/>
            </header>
            <div className="main_content">
                <Banner bannerPage={"最新消息"} bannerTitle={"最新消息"} bannerText={"關於五倍還有更多你可以發掘的，都在這邊說給你知！"} posts={true}/>
                <ErrorBoundary >
                <Post/>
                </ErrorBoundary>
            </div>
            <Footer />
        </div>
    )
}

export default Posts;