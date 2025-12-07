import { notFound } from "next/navigation";
import { API_URL } from "../../../lib/config";
import CourseDetailClient from "./CourseDetailClient";

async function getCourse(slug: string) {
  try {
    const res = await fetch(`${API_URL}/api/courses/${slug}`, {
      cache: "no-store", // Ensure fresh data
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("Failed to fetch course");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
