import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    price: "$250.00",
    status: "Published",
  },
  {
    id: 2,
    title: "Advanced Node.js",
    price: "$180.00",
    status: "Draft",
  },
  {
    id: 3,
    title: "Fullstack MERN Bootcamp",
    price: "$400.00",
    status: "Published",
  },
];

const CourseTable = () => {
  const { data, isLoading } = useGetCreatorCourseQuery();

  const navigate = useNavigate();

  if (isLoading) return;
  <h1> Loading...</h1>;

  return (
    <div className="p-5 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Courses</h2>
        <Button onClick={() => navigate(`create`)}>Create New Course</Button>
      </div>

      <div className="overflow-x-auto rounded-lg border dark:border-gray-700 shadow-sm">
        <Table>
          <TableCaption>List of your courses</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.courses.map((course) => (
              <TableRow key={course._id}>
                <TableCell className="font-medium">{course.courseTitle}</TableCell>
                <TableCell>{course?.coursePrice || "NA"}</TableCell>
                <TableCell>{course.isPublished ? "Published" : "Draft" }</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" onClick={() => navigate(`${course._id}`)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CourseTable;
