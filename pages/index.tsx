import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Bell, Heart, Search, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/appyLogo.png" 
              alt="APPY Recruit Logo" 
              width={40} 
              height={40}
              className="w-10 h-10 dark:invert"
              priority
            />
            <span className="text-2xl font-bold gradient-text">APPY Recruit</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#find-work" className="text-gray-600 hover:text-primary">Find Work</a>
            <a href="#post-opportunity" className="text-gray-600 hover:text-primary">Post Opportunity</a>
            <Button variant="outline" className="mr-2">Log In</Button>
            <Button>Sign Up</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Aligning Talent with Purpose
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-600 max-w-3xl mx-auto">
            Makes recruitment simple, fast, and effective.
          </p>
          <p className="text-lg mb-8 text-gray-500">
            Find Opportunities. Post Opportunities. Connect with the Right Talent.
          </p>
          <Button size="lg" className="bg-[#b10dc8] hover:bg-[#b10dc8]/90">
            Find in 5 minutes <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
            How It Works 
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* For Seekers */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">For Opportunity Seekers</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Complete Application",
                    description: "Easily answer the questionnaire with your profile and resume, let us connect you with the right opportunities."
                  },
                  {
                    title: "Get Hired",
                    description: "Track applications, and connect directly with employers."
                  },
                  {
                    title: "Recommendations",
                    description: "We continuously add new opportunities and notify you when it matches your purpose"
                  }
                ].map((step, index) => (
                  <Card key={index}>
                    <CardContent className="flex gap-4 p-6">
                      <div className="w-8 h-8 rounded-full bg-[#b10dc8] text-white flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* For Businesses */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">For Businesses</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Post Opportunities",
                    description: "Quickly create and post opportunities openings."
                  },
                  {
                    title: "Recommended Applicants",
                    description: "Access recommended applications"
                  },
                  {
                    title: "Hire Top Talent",
                    description: "Find and hire the perfect fit with ease."
                  }
                ].map((step, index) => (
                  <Card key={index}>
                    <CardContent className="flex gap-4 p-6">
                      <div className="w-8 h-8 rounded-full bg-[#b10dc8] text-white flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-[#b10dc8]" />,
                title: "Personalized Recommendations",
                description: "Get opportunities suggestions or applicants profiles tailored to your preferences."
              },
              {
                icon: <Briefcase className="w-8 h-8 text-[#b10dc8]" />,
                title: "Simple Application Process",
                description: "Apply or post Opportunities with just a few clicks."
              },
              {
                icon: <Bell className="w-8 h-8 text-[#b10dc8]" />,
                title: "Real-Time Alerts",
                description: "Receive opportunities alerts or notifications about applicants that match your search criteria."
              }
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why APPY Recruit */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
            Why APPY Recruit?
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative">
              <Image
                src="/ikigai.jpeg"
                alt="Ikigai Principle"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Focus on your Happiness",
                  description: "We believe that finding your purpose will lead you to a better life quality, and more importantly, a stronger sense of accomplishment."
                },
                {
                  title: "User-Friendly",
                  description: "Designed for both Opportunity seekers and businesses to easily navigate."
                },
                {
                  title: "Free to Get Started",
                  description: "Both Opportunity seekers and businesses can sign up at no cost."
                },
                {
                  title: "Fast & Efficient",
                  description: "Quick access to the Opportunities you want or candidates you need."
                }
              ].map((reason, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#b10dc8]" />
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#b10dc8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get Started Now!</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Apply in 5 minutes
            </Button>
            <Button size="lg" variant="secondary">
              Post an Opportunity Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image 
                  src="/appyLogo.png" 
                  alt="APPY Recruit Logo" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 dark:invert"
                  priority
                />
                <span className="text-2xl font-bold">APPY Recruit</span>
              </div>
              <p className="text-gray-400 max-w-md">
                APPY Recruit is dedicated to connecting you with meaningful career opportunities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Social Media</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} APPY Recruit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

