<script setup lang="ts">
import { MilkdownProvider } from "@milkdown/vue";
import BlogPostMarkdown from "./BlogPostMarkdown.vue";
import { postIsLong } from "@/util";

const { post } = defineProps<{ post: BlogPost }>();
</script>

<template>
	<router-link
		class="animate-slide-in cursor-pointer rounded-md bg-stone-50 px-6 py-4 shadow-sm transition-all hover:scale-[1.01] hover:shadow-lg dark:bg-stone-900 dark:shadow-stone-900"
		:to="{ name: 'blog_post', params: { id: post.id } }"
	>
		<div
			:class="{
				'line-clamp-[8] text-ellipsis gradient-mask-b-80': postIsLong(
					post.content,
				),
			}"
		>
			<div class="flex items-start justify-between">
				<div class="text-3xl font-bold">
					{{ post.title || "Untitled Post" }}
				</div>
				<div class="text-sm text-stone-300 dark:text-stone-500">
					{{ new Date(post.created_at).toLocaleDateString() }}
				</div>
			</div>
			<div class="pl-6">
				<MilkdownProvider>
					<BlogPostMarkdown :content="post.content || 'Empty blog post'" />
				</MilkdownProvider>
			</div>
		</div>
	</router-link>
</template>
