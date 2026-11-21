
import { Flame, Leaf, Recycle, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: "100% Natural Soy Wax",
      description: "Clean and eco-friendly ingredients",
    },
    {
      icon: Flame,
      title: "50+ Hour Burn Time",
      description: "Long-lasting fragrance experience",
    },
    {
      icon: Truck,
      title: "Free Shipping $60+",
      description: "Delivered right to your doorstep",
    },
    {
      icon: Recycle,
      title: "Refillable Vessels",
      description: "Sustainable and reusable containers",
    },
  ];

  return (
    <section className="w-full bg-amber-50 py-10 sm:py-12 px-5 sm:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 lg:gap-8">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 sm:gap-4 lg:justify-center"
            >
              {/* Icon */}
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-mauve-700/10 text-mauve-700">
                <Icon size={23} strokeWidth={1.6} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-800">
                  {service.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Services;
