
//Approach 1: Using `legacyBehavior`
// import React from 'react';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
// import Link from 'next/link';
// import posts from '@/app/data/posts';
// import { Post } from '@/types/posts';

// interface PostsTable {
//     limit?: number;
//     title?: string;
// }

// const Poststable: React.FC<PostsTable> = ({ limit, title }) => {
//     const displayedPosts = limit ? posts.slice(0, limit) : posts;

//     return (
//         <div className="mt-10">
//             <h3 className="text-2xl mb-4 font-semibold">
//                 {title ? title : 'Posts'}
//             </h3>
//             <Table>
//                 <TableCaption>A list of recent posts</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Title</TableHead>
//                         <TableHead className="hidden md:table-cell">Author</TableHead>
//                         <TableHead className="hidden md:table-cell text-right">Date</TableHead>
//                         <TableHead className="text-right">View</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {displayedPosts.map((post: Post, index: number) => (
//                         <TableRow key={index}>
//                             <TableCell>{post.title}</TableCell>
//                             <TableCell className="hidden md:table-cell">{post.author}</TableCell>
//                             <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
//                             <TableCell className="text-right">
//                                 <Link href={`/posts/edit/${post.id}`} legacyBehavior>
//                                     <a className="bg-blue-500 text-white px-4 py-2 rounded">Edit</a>
//                                 </Link>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// }

// export default Poststable;


//Approach 2: Without Using an Anchor Tag
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/app/data/posts';
import { Post } from '@/types/posts';

interface PostsTable {
    limit?: number;
    title?: string;
}

const Poststable: React.FC<PostsTable> = ({ limit, title }) => {
    // Correct sorting logic
    const sortedPosts: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Apply limit if provided
    const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

    return (
        <div className="mt-10">
            <h3 className="text-2xl mb-4 font-semibold">
                {title ? title : 'Posts'}
            </h3>
            <Table>
                <TableCaption>A list of recent posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                        <TableHead className="text-right">View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredPosts.map((post: Post, index: number) => (
                        <TableRow key={index}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                            <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                            <TableCell className="text-right">
                                <Link href={`/posts/edit/${post.id}`}>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>Edit</button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Poststable;

//className="bg-blue-500 text-white px-4 py-2 rounded
