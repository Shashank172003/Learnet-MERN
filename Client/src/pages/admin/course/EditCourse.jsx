import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import CourseTab from "./CourseTab";

const EditCourse = () => {
  return (
    <div className="flex-1 mx-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-xl">Add Detaild Course Content</h1>
        <Link to="lecture">
          <Button
            variant="link"
            className="text-sm text-muted-foreground hover:text-blue-600"
          >
            Go to Lacture page
          </Button>
        </Link>
      </div>
      <CourseTab/>
    </div>
  );
};

export default EditCourse;
