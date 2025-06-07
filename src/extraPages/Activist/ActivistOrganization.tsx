import { organizations } from "./data/actvistOrganizations";

const ActivistOrganization = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Activist Organizations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 pb-12"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
                {org.name}
              </h3>
              <p className="text-left text-gray-600 dark:text-gray-300 mt-2">
                {org.description}
              </p>
              <div className="absolute bottom-4 right-4">
                <a
                  href={org.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivistOrganization;
