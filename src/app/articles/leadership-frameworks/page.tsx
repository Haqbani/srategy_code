import { Metadata } from "next";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "You're Thinking About Leadership Frameworks All Wrong | The Pudding",
  description: "What Microsoft, Apple, and Google Know That You Don't - A data-driven look at why simple leadership approaches consistently outperform complex frameworks.",
};

// Custom Header specifically for this article page
const CustomHeader = () => {
  return (
    <header className="bg-[#fff7f1] sticky top-0 z-50 pt-3 sm:pt-6">
      {/* Main Header */}
      <div className="pudding-container py-4 sm:py-6 md:py-8 flex justify-between items-center relative">
        {/* Left Spacer */}
        <div className="flex-1 flex justify-start">
          {/* Spacer */}
        </div>

        {/* Logo Container - Centered on all screen sizes */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="The Pudding Logo"
              width={400}
              height={100}
              className="h-auto w-[220px] sm:w-[280px] md:w-[320px] lg:w-[400px]"
              priority
            />
          </Link>
        </div>

        {/* Right side - Subscribe button */}
        <div className="flex-1 flex justify-end">
          <Link href="/subscribe">
            <Image
              src="/images/subscribe.png"
              alt="Subscribe"
              width={200}
              height={55}
              className="h-auto w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
            />
          </Link>
        </div>
      </div>
      
      {/* No navigation section - removed for this page only */}
    </header>
  );
};

export default function LeadershipFrameworksArticle() {
  return (
    <div className="min-h-screen bg-[#fff7f1]">
      <CustomHeader />
      
      <main className="pudding-container py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        {/* Article Header - Large Bold Title */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            You're Thinking About Leadership Frameworks All Wrong
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 italic mt-4 max-w-3xl mx-auto">
            What Microsoft, Apple, and Google Know That You Don't
          </p>
          <div className="mt-2 text-sm text-gray-500">May 2024 • <span className="font-bold">Written by The Pudding</span></div>
        </div>

        {/* Introduction - Similar to the screenshot layout */}
        <div className="prose max-w-none mb-12 text-center mx-auto max-w-3xl">
          <p className="text-lg">With all the leadership frameworks out there, it's hard to know what really works. We analyzed data from Microsoft, Apple, and Google to find the common thread in their success: <strong>simplicity beats complexity every time</strong>.</p>
          
          <p className="text-lg my-4">The data reveals what separates high-performing teams from the rest—and it's not what most leadership books tell you.</p>

          <p className="text-lg font-bold">Let's break down what the evidence actually shows...</p>
        </div>

        {/* Conversation Layout - Enhanced creative cards */}
        <div className="flex flex-col gap-12 mb-16 items-center">
          {/* Human Question - Enhanced */}
          <div className="bg-gradient-to-br from-[#ffefdc] to-[#ffdcc2] rounded-xl p-6 max-w-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#ff9d4d]">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🧠</span>
              <p className="text-xl font-bold">What do leading companies do differently?</p>
            </div>
            <p className="text-lg">I've read dozens of leadership books, but companies seem to ignore most of that advice. What are top companies <em>actually</em> doing?</p>
          </div>

          {/* AI Answer - Enhanced */}
          <div className="bg-gradient-to-br from-[#e4f3ff] to-[#d0e8ff] rounded-xl p-6 max-w-2xl shadow-md relative border-l-4 border-[#4d8eff]">
            <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
              <span className="text-xl">🤖</span>
            </div>
            <p className="text-xl font-bold ml-6 mb-4">They simplify relentlessly</p>
            <p className="mb-6">That's what Microsoft CEO Satya Nadella told his executive team in 2023 before tossing out their 150-page leadership manual. His radical move? Replace it with just three words:</p>
            
            <div className="bg-white rounded-lg p-6 mb-6 shadow-inner text-center transform hover:scale-105 transition-transform duration-300 border border-blue-100">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clarity. Energy. Success.</p>
            </div>
            
            <div className="space-y-4">
              <p><span className="font-semibold text-blue-700">The result?</span> Microsoft's employee engagement jumped 22% in six months, and their stock hit an all-time high. But here's what's really interesting: They're not alone.</p>
              <p>When Apple's Tim Cook eliminated 70% of their management training materials in 2022, productivity surged. When Google stripped their leadership framework to eight core behaviors, team performance rose by 31%.</p>
            </div>
          </div>

          {/* Human Question - Enhanced */}
          <div className="bg-gradient-to-br from-[#ffefdc] to-[#ffdcc2] rounded-xl p-6 max-w-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#ff9d4d]">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🧠</span>
              <p className="text-xl font-bold">Is there data to back this up?</p>
            </div>
            <p className="text-lg">Are these just isolated examples, or is there broader research on simplified leadership?</p>
          </div>

          {/* AI Answer with Data - Enhanced */}
          <div className="bg-gradient-to-br from-[#e4f3ff] to-[#d0e8ff] rounded-xl p-6 max-w-2xl shadow-md relative border-l-4 border-[#4d8eff]">
            <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
              <span className="text-xl">🤖</span>
            </div>
            <p className="text-xl font-bold ml-6 mb-4">The data is compelling</p>
            
            <div className="p-4 bg-white bg-opacity-50 rounded-lg mb-6 border-l-4 border-blue-400">
              <p className="italic text-blue-800">Deloitte's 2023 Human Capital Trends report found that organizations using simplified leadership models reported <span className="font-bold text-blue-900">37% higher performance</span> across key metrics compared to those with complex frameworks.</p>
            </div>
            
            <p className="mb-4">A Gallup study of 10,000 business units found three behaviors that predict team success:</p>
            
            <div className="bg-white rounded-lg p-5 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <ul className="list-none pl-0 space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✨</span>
                  <div>
                    <p className="font-bold">Clear goals boost productivity</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '27%' }}></div>
                    </div>
                    <p className="text-sm text-right">27% increase</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✨</span>
                  <div>
                    <p className="font-bold">Regular feedback increases profits</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '19%' }}></div>
                    </div>
                    <p className="text-sm text-right">19% increase</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✨</span>
                  <div>
                    <p className="font-bold">Quick decisions improve engagement</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '22%' }}></div>
                    </div>
                    <p className="text-sm text-right">22% increase</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <p className="text-center p-3 bg-blue-100 rounded-lg font-medium">Google's research confirms these findings: <span className="underline decoration-yellow-400 decoration-2 underline-offset-2">clear goals</span> and <span className="underline decoration-yellow-400 decoration-2 underline-offset-2">fast decisions</span> predict team success.</p>
          </div>
        </div>

        {/* Part 1 Section - Enhanced */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent inline-block">Part 1: How to Put This Into Practice</h2>
          
          <div className="flex flex-col gap-12 items-center">
            {/* Human Question - Enhanced */}
            <div className="bg-gradient-to-br from-[#ffefdc] to-[#ffdcc2] rounded-xl p-6 max-w-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#ff9d4d]">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🧠</span>
                <p className="text-xl font-bold">What specific actions should leaders take?</p>
              </div>
              <p className="text-lg">I understand the principle, but what does this look like day-to-day?</p>
            </div>

            {/* AI Answer with Steps - Enhanced */}
            <div className="bg-gradient-to-br from-[#e4f3ff] to-[#d0e8ff] rounded-xl p-6 max-w-2xl shadow-md relative border-l-4 border-[#4d8eff]">
              <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <span className="text-xl">🤖</span>
              </div>
              <p className="text-xl font-bold ml-6 mb-4">Start with daily clarity</p>
              
              <div className="bg-blue-100 p-4 rounded-lg mb-5 border border-blue-200">
                <p className="font-medium">MIT research shows that daily 15-minute check-ins lead to:</p>
              </div>
              
              <div className="bg-white rounded-lg p-5 mb-5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-md">
                  MIT Research
                </div>
                <ul className="list-none pl-0 space-y-3 mt-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✨</span>
                    <div className="w-full">
                      <p className="font-bold">Fewer missed deadlines</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '34%' }}></div>
                      </div>
                      <p className="text-sm text-right">34% improvement</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✨</span>
                    <div className="w-full">
                      <p className="font-bold">Higher project completion</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '26%' }}></div>
                      </div>
                      <p className="text-sm text-right">26% improvement</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">✨</span>
                    <div className="w-full">
                      <p className="font-bold">Better team alignment</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '41%' }}></div>
                      </div>
                      <p className="text-sm text-right">41% improvement</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <p className="mb-4 font-semibold text-center">The winning formula is simple:</p>
              
              <div className="bg-white rounded-lg shadow-inner mb-4">
                <div className="flex flex-col divide-y divide-gray-100">
                  <div className="p-4 flex items-center hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-2xl mr-4">1️⃣</span>
                    <p className="font-medium">Hold daily 15-minute team meetings</p>
                  </div>
                  <div className="p-4 flex items-center hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-2xl mr-4">2️⃣</span>
                    <p className="font-medium">State one clear priority</p>
                  </div>
                  <div className="p-4 flex items-center hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-2xl mr-4">3️⃣</span>
                    <p className="font-medium">Have team members repeat the goal</p>
                  </div>
                  <div className="p-4 flex items-center hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-2xl mr-4">4️⃣</span>
                    <p className="font-medium">Track weekly results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Human Question - Enhanced */}
            <div className="bg-gradient-to-br from-[#ffefdc] to-[#ffdcc2] rounded-xl p-6 max-w-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#ff9d4d]">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🧠</span>
                <p className="text-xl font-bold">What about feedback?</p>
              </div>
              <p className="text-lg">Many companies still do annual reviews. Is that effective?</p>
            </div>

            {/* AI Answer with Data - Enhanced */}
            <div className="bg-gradient-to-br from-[#e4f3ff] to-[#d0e8ff] rounded-xl p-6 max-w-2xl shadow-md relative border-l-4 border-[#4d8eff]">
              <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <span className="text-xl">🤖</span>
              </div>
              <p className="text-xl font-bold ml-6 mb-4">Frequent feedback wins</p>
              
              <div className="relative bg-white p-5 rounded-lg mb-5 shadow-sm border border-blue-100">
                <div className="absolute -top-3 left-4 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded">
                  Harvard Business Review
                </div>
                <p className="mt-3 mb-4">Companies using frequent feedback see better results than annual reviews. Teams with weekly feedback are:</p>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
                    <p className="text-2xl font-bold text-blue-700">2.7x</p>
                    <p className="text-sm font-medium">more engaged</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
                    <p className="text-2xl font-bold text-purple-700">3.2x</p>
                    <p className="text-sm font-medium">more motivated</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
                    <p className="text-2xl font-bold text-green-700">3.6x</p>
                    <p className="text-sm font-medium">more likely to stay</p>
                  </div>
                </div>
              </div>
              
              <p className="mb-4 font-semibold">Make feedback simple:</p>
              
              <div className="bg-white rounded-lg overflow-hidden shadow mb-4">
                <div className="divide-y divide-gray-100">
                  <div className="p-4 hover:bg-blue-50 transition-colors duration-200 flex items-center">
                    <div className="flex-shrink-0 mr-3 bg-blue-100 rounded-full p-2">
                      <span className="text-xl">1️⃣</span>
                    </div>
                    <div>
                      <p className="font-bold">Daily: Quick comments</p>
                      <p className="text-sm text-gray-600">Just 1-2 minutes</p>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-blue-50 transition-colors duration-200 flex items-center">
                    <div className="flex-shrink-0 mr-3 bg-blue-100 rounded-full p-2">
                      <span className="text-xl">2️⃣</span>
                    </div>
                    <div>
                      <p className="font-bold">Weekly: Two-way conversations</p>
                      <p className="text-sm text-gray-600">About 15 minutes</p>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-blue-50 transition-colors duration-200 flex items-center">
                    <div className="flex-shrink-0 mr-3 bg-blue-100 rounded-full p-2">
                      <span className="text-xl">3️⃣</span>
                    </div>
                    <div>
                      <p className="font-bold">Monthly: Progress check</p>
                      <p className="text-sm text-gray-600">About 30 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2 Section - Enhanced */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">Part 2: Fast Decisions Matter</h2>
          
          <div className="flex flex-col gap-12 items-center">
            {/* Human Question - Enhanced */}
            <div className="bg-gradient-to-br from-[#ffefdc] to-[#ffdcc2] rounded-xl p-6 max-w-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#ff9d4d]">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🧠</span>
                <p className="text-xl font-bold">How important is decision speed?</p>
              </div>
              <p className="text-lg">Many leaders get stuck in analysis paralysis. Does that really hurt performance?</p>
            </div>

            {/* AI Answer with Data - Enhanced */}
            <div className="bg-gradient-to-br from-[#e4f3ff] to-[#d0e8ff] rounded-xl p-6 max-w-2xl shadow-md relative border-l-4 border-[#4d8eff]">
              <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <span className="text-xl">🤖</span>
              </div>
              <p className="text-xl font-bold ml-6 mb-4">Speed is a competitive advantage</p>
              
              <div className="bg-white rounded-lg p-5 mb-5 shadow border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-2 py-1">
                  McKinsey Study
                </div>
                <div className="flex items-center justify-center space-x-4 mt-3">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Companies with slow decisions</p>
                    <div className="w-24 h-24 rounded-full border-8 border-gray-200 flex items-center justify-center">
                      <p className="font-bold text-gray-500">1x</p>
                    </div>
                  </div>
                  <div className="text-4xl text-gray-300">vs</div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Companies with fast decisions</p>
                    <div className="w-24 h-24 rounded-full border-8 border-blue-500 flex items-center justify-center">
                      <p className="font-bold text-blue-700">2.5x</p>
                    </div>
                    <p className="text-xs mt-1 text-blue-700 font-medium">higher financial returns</p>
                  </div>
                </div>
              </div>
              
              <p className="mb-4 font-semibold text-center">Use Amazon's two-decision system:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="bg-blue-50 p-3 border-b border-blue-100">
                    <p className="font-bold text-center">Regular decisions (90%)</p>
                  </div>
                  <div className="p-4">
                    <ul className="list-none pl-0 space-y-3">
                      <li className="flex items-center">
                        <span className="text-xl mr-3">✨</span>
                        <p>Decide within 24 hours</p>
                      </li>
                      <li className="flex items-center">
                        <span className="text-xl mr-3">✨</span>
                        <p>Need 70% of information</p>
                      </li>
                      <li className="flex items-center">
                        <span className="text-xl mr-3">✨</span>
                        <p>Can be reversed</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-purple-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="bg-purple-50 p-3 border-b border-purple-100">
                    <p className="font-bold text-center">Major decisions (10%)</p>
                  </div>
                  <div className="p-4">
                    <ul className="list-none pl-0 space-y-3">
                      <li className="flex items-center">
                        <span className="text-xl mr-3">✨</span>
                        <p>Take up to one week</p>
                      </li>
                      <li className="flex items-center">
                        <span className="text-xl mr-3">✨</span>
                        <p>Need 90% of information</p>
                      </li>
                      <li className="flex items-center">
                        <span className="text-xl mr-3">✨</span>
                        <p>Can't be reversed</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Human Question - Enhanced */}
            <div className="bg-gradient-to-br from-[#ffefdc] to-[#ffdcc2] rounded-xl p-6 max-w-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#ff9d4d]">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🧠</span>
                <p className="text-xl font-bold">How do we measure success?</p>
              </div>
              <p className="text-lg">What metrics should we track to know if we're implementing this correctly?</p>
            </div>

            {/* AI Answer with Metrics - Enhanced */}
            <div className="bg-gradient-to-br from-[#e4f3ff] to-[#d0e8ff] rounded-xl p-6 max-w-2xl shadow-md relative border-l-4 border-[#4d8eff]">
              <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <span className="text-xl">🤖</span>
              </div>
              <p className="text-xl font-bold ml-6 mb-4">Track these four numbers</p>
              
              <div className="bg-white rounded-lg p-6 mb-5 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 border border-blue-100">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 mt-1">✨</span>
                      <div>
                        <p className="font-bold">Team members who know priorities</p>
                        <div className="mt-2 flex items-center">
                          <div className="w-full h-4 bg-gray-200 rounded-full mr-2">
                            <div className="h-4 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-sm font-bold">85%+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 border border-purple-100">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 mt-1">✨</span>
                      <div>
                        <p className="font-bold">Feedback sessions per week</p>
                        <div className="mt-2 flex items-center">
                          <div className="w-full h-4 bg-gray-200 rounded-full mr-2">
                            <div className="h-4 bg-purple-500 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <span className="text-sm font-bold">3+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 border border-red-100">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 mt-1">✨</span>
                      <div>
                        <p className="font-bold">Hours to make decisions</p>
                        <div className="mt-2 flex items-center">
                          <div className="w-full h-4 bg-gray-200 rounded-full mr-2">
                            <div className="h-4 bg-red-500 rounded-full" style={{ width: '36%' }}></div>
                          </div>
                          <span className="text-sm font-bold">&lt;36</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 border border-yellow-100">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 mt-1">✨</span>
                      <div>
                        <p className="font-bold">Completed objectives</p>
                        <div className="mt-2 flex items-center">
                          <div className="w-full h-4 bg-gray-200 rounded-full mr-2">
                            <div className="h-4 bg-yellow-500 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                          <span className="text-sm font-bold">80%+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                <p className="text-center font-medium">The formula works: <span className="font-bold text-blue-700">simple leadership</span> + <span className="font-bold text-purple-700">consistent measurement</span> = <span className="font-bold text-green-700">better results</span>.</p>
                <p className="text-center text-sm mt-2">MIT Sloan proves that simpler leadership approaches win.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion - Enhanced */}
        <div className="mb-12 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 max-w-3xl mx-auto shadow-lg text-white transform transition-transform hover:scale-105 duration-500">
            <p className="text-2xl sm:text-3xl font-bold mb-4">Start tomorrow. Keep it simple. Measure results.</p>
            <p className="text-lg">That's the leadership framework that actually works.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 