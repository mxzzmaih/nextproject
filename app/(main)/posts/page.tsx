import Poststable from "@/components/posts/PostsTable";
import BackButton from "@/components/ui/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

const PagePosts = () => {
    return (<>
    <BackButton text="Go Back" link="/"/>
    <Poststable/>
    <PostsPagination/>
    </>)
}
 
export default PagePosts;