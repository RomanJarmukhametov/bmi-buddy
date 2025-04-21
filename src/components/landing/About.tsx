import { Activity, Heart } from "lucide-react";
import { content } from "@/data/content";

export default function About() {
  const { about } = content;

  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-100 text-gray-800"
      aria-labelledby="bmi-importance">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="bmi-importance"
          className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          {about.heading}
        </h2>
        <p className="text-base sm:text-lg mb-6">{about.description}</p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-6"
          aria-label="Benefits of tracking BMI">
          <div
            className="flex flex-col items-center"
            role="presentation">
            <Activity
              color="blue"
              size={40}
              className="mb-2"
              aria-hidden="true"
            />
            <p className="text-sm sm:text-base">{about.benefits.trackHealth}</p>
          </div>
          <div
            className="flex flex-col items-center"
            role="presentation">
            <Heart
              color="red"
              size={40}
              className="mb-2"
              aria-hidden="true"
            />
            <p className="text-sm sm:text-base">
              {about.benefits.stayInformed}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
