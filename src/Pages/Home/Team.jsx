import React from 'react';

export default function MeetOurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "ARUNIM MEHROTRA",
      position: "Post",
      image: "/images/Untitled design (9) 1.png"
    },
    {
      id: 2,
      name: "ARUNIM MEHROTRA",
      position: "Post",
      image: "/images/Rectangle.png"
    },
    {
      id: 3,
      name: "ARUNIM MEHROTRA",
      position: "Post",
      image: "/images/Rectangle-1.png"
    },
    {
      id: 4,
      name: "ARUNIM MEHROTRA",
      position: "Post",
      image: "/images/Rectangle-2.png"
    }
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-400 text-lg font-sm mb-4 pl-4">Meet Our a Team</p>
          <h2 className="text-4xl md:text-4xl font-bold text-white leading-tight pl-4">
            We Are Dedicated For Your<br />
            Financial Well-being
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}