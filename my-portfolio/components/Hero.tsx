import React from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-7 bg-dark">
      <Container className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* 👇 Left Column - Text */}
        <div className="flex-1 space-y-6">
          <p
            className="text-text-off-white/60"
            style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "16px" }}
          >
            Hi
          </p>

          <h1 className="text-white leading-tight text-4xl sm:text-5xl md:text-6xl font-semibold whitespace-nowrap">
            i&apos;m{" "}
           <span
           className="text-primary font-poppins font-bold text-5xl sm:text-5xl md:text-6xl"
           >
           Prince Udoewah
            </span>
          </h1>
          <p
            className="text-white"
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "40px",
            }}
          >
            a Frontend Developer
          </p>

          <p
            className="text-text-off-white/80 max-w-xl"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            Passionate about creating beautiful, responsive, and user-friendly
            web experiences. I specialize in modern JavaScript, React and Next.js frameworks and
            design systems that bring ideas to life.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
           {/* 👇 Scroll to Projects Section */}
           <Button
            variant="primary"
           onClick={() => {
           const target = document.getElementById("projects");
            if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            >
             View My Work
            </Button>

            {/* 👇 Open LinkedIn in a new tab */}
           <Button
           variant="outline"
           onClick={() =>
            window.open("https://www.linkedin.com/in/prince-udoewah-801637111/", "_blank")
            }
           >
            View LinkedIn Profile
             </Button>
          </div>

          {/* Decorative Line */}
          <div className="flex gap-2 pt-6">
            <div className="h-1 w-16 bg-primary rounded-full" />
            <div className="h-1 w-8 bg-primary/50 rounded-full" />
          </div>
        </div>

          {/* 👇 Right Column - Profile Image */}
           <div className="relative flex-shrink-0 md:ml-16 -mt-8"> {/* moved right and up */}
          {/* Hero image container */}
         <div className="w-64 h-64 relative mx-auto md:mx-0 border-4 border-orange-500 rounded-full overflow-hidden shadow-lg">
         <Image
         src="/images/profile.jpeg"
         alt="Prince Joseph Udoewah"
         fill
         className="rounded-full object-cover"
           />
          </div>

         {/* Decorative Circles */}
         <div className="absolute -z-10 -top-6 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
         <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        </div>


      </Container>
    </section>
  );
}
