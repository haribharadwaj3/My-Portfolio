import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-500" size={28} />,
    solved: "250+ probllems",
    rating: "1439",
    url: "https://leetcode.com/u/haribharadwaj/",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-green-600" size={28} />,
    solved: "250+ problems",
    rating: "2",
    url: "https://www.geeksforgeeks.org/user/haribhar3bom/",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-[#5B4638]" size={28} />,
    solved: "200+ problems",
    rating: "1100+ ",
    url: "https://www.codechef.com/users/hari_bharadwaj",
  },
  {
    name: "HackerRank",
    icon: <SiHackerrank className="text-green-500" size={28} />,
    solved: "150+ problems",
    rating: "4",
    url: "https://www.hackerrank.com/profile/haribharadwaj6",
  },
];

export default function CodingSection() {
  return (
    <section id="codebase" className="py-24 px-4 bg-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center heading-underline">
  <span className="text-primary">Code</span>base
</h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These profiles demonstrate my commitment to sharpening problem-solving skills and writing efficient code. Each reflects consistent practice and technical growth.
        </p>
    <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="group flex flex-col justify-between gap-3 p-4 rounded-2xl transition-shadow shadow-md hover:shadow-violet-500/50 bg-card hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 dark:bg-zinc-700 p-2 rounded-full">
                <div className="transform transition-transform duration-700 group-hover:rotate-360">
                  {profile.icon}
                </div>
              </div>
              <span className="text-lg font-semibold">{profile.name}</span>
            </div>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-500 hover:text-violet-600"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
          <div className="flex justify-between text-sm text-white-700 dark:text-white-300">
            <div>
              <p className="font-medium">Solved</p>
              <p>{profile.solved}</p>
            </div>
            <div>
              <p className="font-medium">Rating</p>
              <p className="flex items-center gap-1">
                {profile.rating}
                <FaStar className="text-yellow-500" />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
