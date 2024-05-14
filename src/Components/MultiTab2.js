import React, { useState } from "react";
import { useEffect } from "react";

export default function MultiTab2() {

  const [tab, setTab] = useState("Development");

  return (
    <div className="py-20">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="delinglogheading">CASE STUDIES</p>
        <h1 className="delingheading">Detailing of our products</h1>
      </div>

      <div className="multitab mt-10 p-3">
        <div className="w-full bg-white flex max-xl:flex-col p-3 rounded-2xl justify-between">
          <button
            onClick={() => setTab("Development")}
            className={`${
              tab === "Development"
                ? "bg-black text-white"
                : "bg-white text-black"
            } px-5 py-3 rounded-xl text-xl`}
          >
            Development
          </button>
          <button
            onClick={() => setTab("Woo Commerce")}
            className={`${
              tab === "Woo Commerce"
                ? "bg-black text-white"
                : "bg-white text-black"
            } px-5 py-3 rounded-xl text-xl`}
          >
            Woo Commerce
          </button>
          <button
            onClick={() => setTab("CRM Solutions")}
            className={`${
              tab === "CRM Solutions"
                ? "bg-black text-white"
                : "bg-white text-black"
            } px-5 py-3 rounded-xl text-xl`}
          >
            CRM Solutions
          </button>
          <button
            onClick={() => setTab("Web Designing")}
            className={`${
              tab === "Web Designing"
                ? "bg-black text-white"
                : "bg-white text-black"
            } px-5 py-3 rounded-xl text-xl`}
          >
            Web Designing
          </button>
          <button
            onClick={() => setTab("IT Support")}
            className={`${
              tab === "IT Support"
                ? "bg-black text-white"
                : "bg-white text-black"
            } px-5 py-3 rounded-xl text-xl`}
          >
            IT Support
          </button>
        </div>

        {tab === "Development" && (
          <div className=" development w-full flex max-xl:flex-col mt-4 gap-4">
            <div className="bg-white w-7/12 max-xl:w-full rounded-2xl p-10 flex">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/case-studio-1-1-1.jpg"
                alt=""
                className="max-xl:w-1/2"
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/case-studio-2-2-1.jpg"
                alt=""
                className=" max-xl:w-1/2"
              />
            </div>
            <div className="bg-white w-5/12 max-xl:w-full rounded-2xl px-10 py-20">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                alt=""
              />
              <div className="text-2xl font-semibold py-3">Development</div>
              <div className=" text-gray-600 text-xl max-xl:text-lg">
                Software development is a dynamic and rapidly evolving field
                that plays a pivotal role in shaping the digital landscape we
                live in today. It encompasses the processes, methodologies, and
                practices used to design, create, deploy, and maintain software
                applications and systems.
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={45}
                  viewBox="0 0 512 512"
                  className="ml-auto"
                >
                  <path
                    fill="#008efa"
                    d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {tab === "Woo Commerce" && (
          <div className=" woocommerce w-full flex max-xl:flex-col mt-4 gap-4">
            <div className="bg-white w-7/12 max-xl:w-full rounded-2xl p-10 flex">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-3.jpg"
                alt=""
                className="max-xl:w-1/2"
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-4.jpg"
                alt=""
                className=" max-xl:w-1/2"
              />
            </div>
            <div className="bg-white w-5/12 max-xl:w-full rounded-2xl px-10 py-20">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                alt=""
              />
              <div className="text-2xl font-semibold py-3">Woo Commerce</div>
              <div className=" text-gray-600 text-xl max-xl:text-lg">
                Software development is a dynamic and rapidly evolving field
                that plays a pivotal role in shaping the digital landscape we
                live in today. It encompasses the processes, methodologies, and
                practices used to design, create, deploy, and maintain software
                applications and systems.
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={45}
                  viewBox="0 0 512 512"
                  className="ml-auto"
                >
                  <path
                    fill="#008efa"
                    d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {tab === "CRM Solutions" && (
          <div className=" crmsolutions w-full flex max-xl:flex-col mt-4 gap-4">
            <div className="bg-white w-7/12 max-xl:w-full rounded-2xl p-10 flex">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-5.jpg"
                alt=""
                className="max-xl:w-1/2"
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-6.jpg"
                alt=""
                className=" max-xl:w-1/2"
              />
            </div>
            <div className="bg-white w-5/12 max-xl:w-full rounded-2xl px-10 py-20">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                alt=""
              />
              <div className="text-2xl font-semibold py-3">CRM Solutions</div>
              <div className=" text-gray-600 text-xl max-xl:text-lg">
                Software development is a dynamic and rapidly evolving field
                that plays a pivotal role in shaping the digital landscape we
                live in today. It encompasses the processes, methodologies, and
                practices used to design, create, deploy, and maintain software
                applications and systems.
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={45}
                  viewBox="0 0 512 512"
                  className="ml-auto"
                >
                  <path
                    fill="#008efa"
                    d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {tab === "Web Designing" && (
          <div className=" webdesigning w-full flex max-xl:flex-col mt-4 gap-4">
            <div className="bg-white w-7/12 max-xl:w-full rounded-2xl p-10 flex">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/case-studio-1-1-1.jpg"
                alt=""
                className="max-xl:w-1/2"
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/case-studio-2-2-1.jpg"
                alt=""
                className=" max-xl:w-1/2"
              />
            </div>
            <div className="bg-white w-5/12 max-xl:w-full rounded-2xl px-10 py-20">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                alt=""
              />
              <div className="text-2xl font-semibold py-3">Web Design</div>
              <div className=" text-gray-600 text-xl max-xl:text-lg">
                Software development is a dynamic and rapidly evolving field
                that plays a pivotal role in shaping the digital landscape we
                live in today. It encompasses the processes, methodologies, and
                practices used to design, create, deploy, and maintain software
                applications and systems.
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={45}
                  viewBox="0 0 512 512"
                  className="ml-auto"
                >
                  <path
                    fill="#008efa"
                    d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {tab === "IT Support" && (
          <div className=" itsupport w-full flex max-xl:flex-col mt-4 gap-4">
            <div className="bg-white w-7/12 max-xl:w-full rounded-2xl p-10 flex">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-10.jpg"
                alt=""
                className="max-xl:w-1/2"
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-9.jpg"
                alt=""
                className=" max-xl:w-1/2"
              />
            </div>
            <div className="bg-white w-5/12 max-xl:w-full rounded-2xl px-10 py-20">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                alt=""
              />
              <div className="text-2xl font-semibold py-3">IT Support</div>
              <div className=" text-gray-600 text-xl max-xl:text-lg">
                Software development is a dynamic and rapidly evolving field
                that plays a pivotal role in shaping the digital landscape we
                live in today. It encompasses the processes, methodologies, and
                practices used to design, create, deploy, and maintain software
                applications and systems.
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={45}
                  viewBox="0 0 512 512"
                  className="ml-auto"
                >
                  <path
                    fill="#008efa"
                    d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
