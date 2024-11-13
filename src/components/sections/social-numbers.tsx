import React from "react";

function SocialNumbersComponent() {
  return (
    <div className="flex justify-center items-center text-xs font-sans max-w-4xl m-auto">
      <div className="container py-16 lg:py-15">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-2xl">Leadership</h2>
              <p className="mt-3 text-muted-foreground">
                For as long as there have been cities, the public square has
                been a fundamental part of the urban landscape - an open,
                approachable space to meet and engage with friends and
                neighbours. Space aims to capture this spirit of bringing people
                together in an exciting, welcoming environment.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12 max-w-4xl m-auto">
              {/* Icon Block */}
              <div className="text-center">
                <div className="flex justify-center items-center w-12 h-12 mx-auto">
                  <div className="text-4xl font-bold">+100</div>
                </div>
                <div className="mt-3">
                  <p className="mt-1 text-muted-foreground">
                    brands we've worked with since
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center w-12 h-12 mx-auto">
                  <div className="text-4xl font-bold">1998</div>
                </div>
                <div className="mt-3">
                  <p className="mt-1 text-muted-foreground">
                    since we've started working
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center w-12 h-12 mx-auto">
                  <div className="text-4xl font-bold">65%</div>
                </div>
                <div className="mt-3">
                  <p className="mt-1 text-muted-foreground">
                    growth in the last 12 months
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center w-12 h-12 mx-auto">
                  <div className="text-4xl font-bold">1st</div>
                </div>
                <div className="mt-3">
                  <p className="mt-1 text-muted-foreground">
                    brands we've worked with since 1998
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialNumbersComponent;
