import BuyCourseButton from "@/components/BuyCourseButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeInfo, Lock, PlayCircle } from "lucide-react";
import React from "react";

const CourseDetail = () => {
  const purchasedCourse = false;
  return (
    <div className="mt-20 space-y-4">
      <div className="bg-[#2D2F31] text-white">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 space-y-2">
          <h1 className="text-3xl font-bold">Course Title</h1>
          <p className="text-lg text-gray-300">Course Subtitle</p>
          <p className="text-sm text-gray-400">
            Created By{" "}
            <span className="text-white font-medium underline italic">
              MernStack
            </span>
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <BadgeInfo size={16} />
            <p>Last Update 16-04-2025</p>
          </div>
          <p>Student enrolled : 10</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="font-bold text-xl md:text-2xl">Description</h1>
          <p>
            This course is designed for developers who want to enhance their
            skills in building modern web applications. It covers advanced
            concepts and practical implementations using the MERN stack
            (MongoDB, Express.js, React, and Node.js). By the end of this
            course, you will have the expertise to create scalable and efficient
            applications.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>4 Lecture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[1, 2, 3].map((lecture, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-md gap-3 text-sm"
                >
                  <span>
                    {true ? <PlayCircle size={14} /> : <Lock size={14} />}
                  </span>
                  <p>Lecture Title</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-1/3 space-y-4">
          <Card>
            <CardContent className="p-4 flex flex-col">
              <div clssName="w-full aspect-video mb-4">
                react player video ayega
              </div>
              <h1>Lecture title</h1>
              <Separator clssName="my-4" />
              <h1 className="text-lg md:text-xl font-bold text-center">
                course price
              </h1>
            </CardContent>
            <CardFooter>
              {
                purchasedCourse ? (
                  <Button className="w-full">Continue Course</Button>
                ) : (
                  <BuyCourseButton/>
                )
              }
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
