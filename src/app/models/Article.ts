import mongoose, { Document, Schema } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  content: string;
  category: string;
  lastModified: Date;
}

const ArticleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: [true, 'Please provide a title for this article.'],
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide the content for this article.'],
  },
  category: {
    type: String,
    required: [true, 'Please specify the category for this article.'],
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema); 