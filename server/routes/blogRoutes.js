import express from 'express';

import {
  addBlog,
  addComment,
  deleteBlogById,
  getAllBlogs,
  getAllComments,
  getBlogById,
  getBlogComments,
  togglePublish,
  approveComment,
  deleteComment
} from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post('/add',upload.single('image'),auth ,addBlog);
blogRouter.get('/all',getAllBlogs);

blogRouter.get('/comments', getAllComments)
blogRouter.post('/comments',getBlogComments);   
blogRouter.post('/add-comment',addComment);

blogRouter.get('/:blogId',getBlogById);


blogRouter.post('/delete',auth,deleteBlogById);
blogRouter.post('/toggle-publish',auth,togglePublish);

blogRouter.post('/approve-comment', auth, approveComment);
blogRouter.post('/delete-comment', auth, deleteComment);





export default blogRouter;