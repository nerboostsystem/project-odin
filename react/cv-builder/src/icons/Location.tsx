import { SVGProps } from "react";

export default function LocationIcon({ ...props }: SVGProps<SVGSVGElement>) {
	return <svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 512 512"
	>
		<path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64z"></path>
	</svg>;
}
