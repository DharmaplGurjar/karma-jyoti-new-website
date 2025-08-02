import Image from "next/image";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white flex flex-col items-center p-16 ">
      <div className="ml-8">
        <h2 className="text-2xl p-4">Social</h2>
        <ul className="py-4 flex flex-col gap-4">
          <li className="flex items-center">
            <Link href="https://www.facebook.com/karmajyoti20feb" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Image
                  src="/icons/facebook.png"
                  width={30}
                  height={20}
                  alt="facebook"
                  className="mx-4"
                />
                FaceBook
              </a>
            </Link>
          </li>

          <li className="flex items-center">
            <Link href="https://www.instagram.com/karmajyoti_iitism/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Image
                  src="/icons/instagram.png"
                  width={30}
                  height={20}
                  alt="instagram"
                  className="mx-4"
                />
                Instagram
              </a>
            </Link>
          </li>

          <li className="flex items-center">
            <Link href="https://www.linkedin.com/company/karma-jyoti" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Image
                  src="/icons/linkedin.png"
                  width={30}
                  height={20}
                  alt="linkedin"
                  className="mx-4"
                />
                LinkedIn
              </a>
            </Link>
          </li>
        </ul>

        <hr className="w-[400px] mt-4" />
      </div>

      <div className="py-8 ml-8">
        <h2 className="text-3xl">Address : </h2>
        <h4 className="py-4">
          Room No. 313, 3rd floor, SAC, IIT(ISM) Dhanbad, Jharkhand, 826004
        </h4>

        <hr className="w-[400px] mt-4" />
      </div>

      <div className="py-8 ml-8">
        <h2>
          &quot;Karma Jyoti is an NGO founded and managed by Students and Scholars of
          Indian Institute of Technology (ISM), Dhanbad&quot;
        </h2>
        <h2 className="py-6">
          &quot;We focus on spreading awareness, education and smile to the society
          😊&quot;
        </h2>

        <hr className="w-[400px] mt-4" />
      </div>

      <div>
        <h2>
          © Copyright Karma Jyoti 2024
          Designed with ❤️ by Amit
        </h2>
      </div>
    </div>
  );
}

export default Footer;
