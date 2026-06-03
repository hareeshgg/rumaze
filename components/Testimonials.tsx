import SplitText from "./SplitText";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Rumaze crafts experiences, not just visuals.",
        description:
            "Working with Rumaze was like collaborating with a creative force that understood our vision instantly. They transformed our ideas into stunning reality with precision and flair.",
    },
    {
        id: 2,

        quote: "Flawless execution meets artistic brilliance.",
        description:
            "The team at Rumaze demonstrates an exceptional understanding of modern design principles while maintaining a classic sense of style. Their attention to detail is second to none.",
    },
    {
        id: 3,

        quote: "A partnership that elevates your brand.",
        description:
            "Rumaze possesses that rare combination of creativity, technical skill, and professionalism. They don't just complete projects; they build lasting partnerships.",
    },
];

const mentions = [
    {
        id: 1,
        text: "timely"
    },
    {
        id: 2,
        text: "high-quality work"
    },
    {
        id: 3,
        text: "communicative"
    },
    {
        id: 4,
        text: "professional"
    },
    {
        id: 5,
        text: "creative"
    },
    {
        id: 6,
        text: "exceeds expectations"
    },
    {
        id: 7,
        text: "great project management"
    },
    {
        id: 8,
        text: "well-organizd projects"
    }

]

const Testimonials = () => {
    return (
        <section className="relative py-24 overflow-hidden mt-24 md:mt-32 lg:mt-48 pb-24" id="testimonials">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] -z-10" />

            <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-24">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1]">
                            <SplitText
                                text="What our"
                                delay={50}
                                tag="span"
                                textAlign="left"
                                className="block"
                            />
                            <SplitText
                                text="clients say"
                                delay={80}
                                className="font-serif italic block"
                                tag="span"
                                textAlign="left"
                            />
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2">
                                <h3 className="text-white uppercase tracking-widest text-xl font-medium">Top mentions</h3>
                                <div className="flex flex-wrap gap-2">
                                    {mentions.map((mention) => (
                                        <span
                                            key={mention.id}
                                            className="text-[16px] uppercase tracking-tighter text-white/80 border border-white/20 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors"
                                        >
                                            {mention.text}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={cn(
                                "group relative p-10 flex flex-col justify-between transition-all duration-500",
                                "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20",
                                "hover:bg-white/[0.05] hover:-translate-y-2"
                            )}
                        >
                            {/* Card Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="space-y-8 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                                    {testimonial.quote}
                                </h3>
                                <p className="text-white/60 text-lg leading-relaxed font-light">
                                    {testimonial.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="flex items-center justify-center">
                    <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 transition-colors hover:text-white text-xl px-10 py-8 text-white rounded-full cursor-pointer">
                        Read all reviews
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div> */}
            </div>
        </section>
    );
};

export default Testimonials;