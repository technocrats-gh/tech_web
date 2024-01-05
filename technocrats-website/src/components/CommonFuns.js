export const handleClickScroll = (path, offset) => {
    const element = document.getElementById(path);
    const headerOffset = offset;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
};

export const navItems = [
    { label: 'What We Specialize In', nav: "services" },
    { label: 'Our Experts', nav: 'team' },
    { label: "What Clients Say", nav: "testimonials" },
    { label: "Contact Us", nav: "footer" }
];