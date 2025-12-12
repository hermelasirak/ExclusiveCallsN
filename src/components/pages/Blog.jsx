import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "../layouts/Container";
import PagesHeader from "../Common/PagesHeader";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../ui/pagination";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Ecalls1 from "@/assets/Blogs/ecalls1.jpg";
import Ecalls2 from "@/assets/Blogs/ecalls2.jpg";
import Ecalls3 from "@/assets/Blogs/ecalls3.jpg";
import Ecalls4 from "@/assets/Blogs/ecalls4.jpg";
import Ecalls5 from "@/assets/Blogs/ecalls5.jpg";
import Ecalls6 from "@/assets/Blogs/ecalls6.jpg";
import Ecalls7 from "@/assets/Blogs/ecalls7.jpg";
import Ecalls8 from "@/assets/Blogs/ecalls8.jpg";
import Ecalls9 from "@/assets/Blogs/ecalls9.jpg";
import Ecalls10 from "@/assets/Blogs/ecalls10.jpg";
import Ecalls11 from "@/assets/Blogs/ecalls11.jpg";
import Ecalls12 from "@/assets/Blogs/ecalls12.jpg";
import Ecalls13 from "@/assets/Blogs/ecalls13.jpg";
import Ecalls14 from "@/assets/Blogs/ecalls14.jpg";
import Ecalls15 from "@/assets/Blogs/ecalls15.jpg";
import Ecalls16 from "@/assets/Blogs/ecalls16.jpg";
import Ecalls17 from "@/assets/Blogs/ecalls17.jpg";
import Ecalls18 from "@/assets/Blogs/ecalls18.jpg";
import Ecalls19 from "@/assets/Blogs/ecalls19.jpg";
import Ecalls20 from "@/assets/Blogs/ecalls20.jpg";
import Ecalls21 from "@/assets/Blogs/ecalls21.jpg";
import Ecalls22 from "@/assets/Blogs/ecalls22.jpg";
import Ecalls23 from "@/assets/Blogs/ecalls23.jpg";
import Ecalls24 from "@/assets/Blogs/ecalls24.jpg";
import Ecalls25 from "@/assets/Blogs/ecalls25.jpg";
import Ecalls26 from "@/assets/Blogs/ecalls26.jpg";
import Ecalls27 from "@/assets/Blogs/ecalls27.jpg";
import Ecalls28 from "@/assets/Blogs/ecalls28.jpg";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;
  const blogImages = [
    Ecalls1,
    Ecalls2,
    Ecalls3,
    Ecalls4,
    Ecalls5,
    Ecalls6,
    Ecalls7,
    Ecalls8,
    Ecalls9,
    Ecalls10,
    Ecalls11,
    Ecalls12,
    Ecalls13,
    Ecalls14,
    Ecalls15,
    Ecalls16,
    Ecalls17,
    Ecalls18,
    Ecalls19,
    Ecalls20,
    Ecalls21,
    Ecalls22,
    Ecalls23,
    Ecalls24,
    Ecalls25,
    Ecalls26,
    Ecalls27,
    Ecalls28,
  ];

  const navigate = useNavigate();

  const getBlogImage = (index) => {
    return blogImages[index % blogImages.length];
  };

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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}api/blogs?source=ecalls`
        );
        console.log("Fetched blogs:", response.data);
        const sortedBlogs = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Smart pagination: show first, last, current, and minimal pages around
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1; // Number of pages to show around current page

    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    // Calculate start and end of the range around current page
    let start = Math.max(2, currentPage - delta);
    let end = Math.min(totalPages - 1, currentPage + delta);

    // Adjust if we're near the start
    if (currentPage <= 3) {
      end = Math.min(3, totalPages - 1);
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - 2, 2);
    }

    // Add ellipsis after first page if needed
    if (start > 2) {
      pages.push("ellipsis-start");
    }

    // Add pages in the range
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      pages.push("ellipsis-end");
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PagesHeader pageTitle="Blogs" />

      <Container>
        {loading ? (
          <div className="flex flex-col justify-center items-center h-[400px] gap-4">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-200 border-t-orange-500"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-orange-500/20"></div>
            </div>
            <p className="text-muted-foreground text-sm">Loading articles...</p>
          </div>
        ) : (
          <section className="py-16 md:py-20 lg:py-24">
            <div className="mx-auto flex flex-col items-center gap-12 lg:gap-16">
              {/* Intro Section */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                  Insights & Strategies
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Whether you're looking to optimize your sales process, improve
                  customer retention, or stay ahead in a competitive market,
                  we've got you covered. Dive into our articles to discover
                  innovative solutions, industry updates, and practical advice
                  tailored to empower your business.
                </p>
              </div>

              {/* Blog Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
                {currentBlogs.map((post) => (
                  <Card
                    key={post._id}
                    className="
                      group
                      overflow-hidden
                      rounded-2xl
                      bg-white
                      border border-slate-200
                      shadow-lg
                      hover:shadow-2xl
                      transition-all duration-300
                      hover:-translate-y-2
                      flex flex-col
                      h-full
                    "
                  >
                    {/* Image Container */}
                    <div className="relative aspect-video w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img
                        src={getBlogImage(blogs.indexOf(post))}
                        alt={post.title}
                        className="
                          h-full w-full object-cover
                          transition-transform duration-500
                          group-hover:scale-110
                        "
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          onClick={() => navigate(`/blog/${post._id}`)}
                          className="
                            bg-gradient-to-r from-orange-500 to-amber-400
                            hover:from-orange-600 hover:to-amber-500
                            text-white
                            shadow-lg
                          "
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6 flex flex-col flex-1">
                      {/* Date & Reading Time */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{getReadingTime(post.content)}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {post.title}
                        </a>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">
                        {Array.isArray(post.content)
                          ? post.content.join(" ").slice(0, 150) + "..."
                          : typeof post.content === "string"
                          ? post.content.slice(0, 150) + "..."
                          : ""}
                      </p>

                      {/* Read More Button */}
                      <div className="mt-auto pt-4 border-t border-slate-100">
                        <button
                          onClick={() => navigate(`/blog/${post._id}`)}
                          className="
                            flex items-center gap-2
                            text-sm font-semibold
                            text-orange-600
                            hover:text-orange-700
                            transition-colors
                            group/btn
                          "
                        >
                          Read more
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage((prev) => Math.max(prev - 1, 1));
                          }}
                          className={
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                      {getPageNumbers().map((page, index) => {
                        if (
                          page === "ellipsis-start" ||
                          page === "ellipsis-end"
                        ) {
                          return (
                            <PaginationItem key={`ellipsis-${index}`}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              isActive={currentPage === page}
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page);
                              }}
                              className="
                                transition-all
                                hover:bg-orange-50
                                hover:text-orange-600
                              "
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage((prev) =>
                              Math.min(prev + 1, totalPages)
                            );
                          }}
                          className={
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
};

export default Blog;
