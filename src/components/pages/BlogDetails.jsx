import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "../layouts/Container";
import PagesHeader from "../Common/PagesHeader";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadingTime = (content) => {
    const text = Array.isArray(content) ? content.join(" ") : content;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}api/blogs/${id}`
        );
        console.log("Fetched blog data:", response.data);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PagesHeader pageTitle={blog ? blog.title : "Loading..."} />

      <Container>
        {loading ? (
          <div className="flex flex-col justify-center items-center h-[400px] gap-4">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-200 border-t-orange-500"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-orange-500/20"></div>
            </div>
            <p className="text-muted-foreground text-sm">Loading article...</p>
          </div>
        ) : blog ? (
          <article className="max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
            {/* Back Button */}
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="
                  group
                  text-slate-600
                  hover:text-orange-600
                  hover:bg-orange-50
                  transition-colors
                "
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blogs
              </Button>
            </div>

            {/* Article Card */}
            <Card className="rounded-3xl border border-slate-200 shadow-xl overflow-hidden bg-white">
              {/* Article Header */}
              <div className="px-8 pt-10 pb-8 border-b border-slate-100">
                <div className="space-y-6">
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                    {blog.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold">
                        E
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Ecalls</p>
                        <p className="text-xs text-slate-500">Author</p>
                      </div>
                    </div>

                    <div className="h-6 w-px bg-slate-300" />

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">
                        {formatDate(blog.date)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">
                        {getReadingTime(blog.content)}
                      </span>
                    </div>

                    <div className="ml-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleShare}
                        className="
                          border-slate-200
                          hover:bg-orange-50
                          hover:border-orange-300
                          hover:text-orange-600
                        "
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="px-8 py-10">
                <div className="prose prose-lg prose-slate max-w-none">
                  {Array.isArray(blog.content) ? (
                    <div className="space-y-6">
                      {blog.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className="
                            text-base md:text-lg
                            text-slate-700
                            leading-relaxed
                            first:mt-0
                          "
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p
                      className="
                        text-base md:text-lg
                        text-slate-700
                        leading-relaxed
                        whitespace-pre-line
                      "
                    >
                      {blog.content}
                    </p>
                  )}
                </div>

                {/* External Link */}
                {blog.url && (
                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <Button
                      asChild
                      className="
                        bg-gradient-to-r from-orange-500 to-amber-400
                        hover:from-orange-600 hover:to-amber-500
                        text-white
                        shadow-lg
                        group
                      "
                    >
                      <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Full Article
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Navigation Footer */}
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                onClick={() => navigate("/blog")}
                className="
                  border-slate-200
                  hover:bg-orange-50
                  hover:border-orange-300
                  hover:text-orange-600
                  px-8
                "
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Blogs
              </Button>
            </div>
          </article>
        ) : (
          <div className="flex flex-col justify-center items-center h-[400px] gap-4">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-2xl font-bold text-slate-900">
              Blog not found
            </h2>
            <p className="text-muted-foreground">
              The article you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => navigate("/blog")}
              className="mt-4 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500"
            >
              Back to Blogs
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default BlogDetails;
