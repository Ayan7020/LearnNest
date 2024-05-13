

## Adding Shadcn UI in Turborepo

Add Dependecies

```sh
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge 
```

Add Icon Library
```sh
npm install lucide-react 
```

Add Ract Icon
```sh
npm install @radix-ui/react-icons
```

Adding Tailwind 
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Rename tailwind.config.js -> tailwind.config.ts

Update tailwind.config.ts
[Tailwind.config.ts](https://github.com/dan5py/turborepo-shadcn-ui/blob/main/packages/ui/tailwind.config.ts)

Add app/globals.css
[Code](https://github.com/dan5py/turborepo-shadcn-ui/blob/main/packages/ui/src/globals.css)

Add lib/utils.ts
```sh
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

Update Package.json
In Export add these  
```sh
"./utils": "./lib/utils.ts" 
```  
  
Add components.json
[Components.json](https://github.com/Ayan7020/Paypi/blob/main/packages/ui/components.json)

Add Random Shadcnui Component and export it on package.json

Update Package.json
```sh
    "./globals.css": "./app/globals.css",
    "./postcss.config": "./postcss.config.js",
    "./tailwind.config": "./tailwind.config.ts",
    "./lib/*": "./lib/*.ts"
``` 


Now goto apps/user/app/layout.tsx
remove globals.css import and add
```sh
import "@repo/ui/globals.css";
```

goto tailwind.config.js in user folder
remove all and add these
```sh
export * from "@repo/ui/tailwind.config";
```
goto postcss.config.js
remove all and add these
```sh
module.exports = require('@repo/ui/postcss.config');
``` 


