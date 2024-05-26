# Itaú Landpage

#### Study Project just to deepen learning of NextJs and Tailwind with guidance from the [CodeBoost channel](https://www.youtube.com/watch?v=6-2xfn6wzvU&t=1742s).

### The challenge

Users should be able to:

- See homepage informations and its publicity.

### Screenshots:

<img src="./src/assets//print1.png"/>
<img src="./src/assets//print2.png"/>

## My process

### Built with

- Flexbox
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

Component Building and Tailwind application

```js
type Props = {
  children: ReactNode,
};
const Container = ({ children }: Props) => {
  return (
    <div className="flex justify-between items-center w-full max-w-[1246px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
```

## Author

- [LinkedIn](https://www.linkedin.com/in/mikaelespinola)
- [Gmail](mailto:mikaelespinolaa@gmail.com)
- [CodBoost](https://www.youtube.com/@codeboostDev) - Teacher
