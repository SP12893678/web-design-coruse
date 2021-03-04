<template>
  <div class="flex flex-wrap justify-evenly px-8 py-8">
    <div
      v-for="course in courses"
      :key="course.path"
      class="w-64  max-w-sm rounded overflow-hidden shadow-md inline-block hover:shadow-lg my-4"
    >
      <router-link :to="course.path">
        <div class="px-6 py-4 h-3/5">
          <div class="font-bold text-xl mb-2">
            {{ course.title }}
          </div>
          <p class="text-gray-700 text-base">
            {{ course.description }}
          </p>
        </div>
        <div class="px-4 py-4 h-2/5 flex items-end">
          <span
            v-for="tag in course.tags"
            :key="tag"
            :class="'inline-block  rounded-full px-3 py-1 text-sm font-semibold mr-2 text-white ' + tag.bgcolor"
          >{{ tag.text }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            courses: [
                { path: '/course/week1', title: 'Week1', description: 'Introduction HTML', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week2', title: 'Week2', description: 'HTML Basic, Elements, Attributes, Headings, Paragraphs, Styles', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week3', title: 'Week3', description: 'HTML Text Formatting, Quotations, Comments, Colors', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week4', title: 'Week4', description: 'HTML CSS', tags: [{ text: 'CSS', bgcolor: 'bg-blue-500' }] },
                { path: '/course/week5', title: 'Week5', description: 'HTML CSS', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week6', title: 'Week6', description: 'HTML Link', tags: [{ text: 'JavaScript', bgcolor: 'bg-yellow-500' }] },
                { path: '/course/week7', title: 'Week7', description: 'HTML Images', tags: [{ text: 'Vue', bgcolor: 'bg-green-500' }] },
                { path: '/course/week8', title: 'Week8', description: 'HTML Tables', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week9', title: 'Week9', description: 'Middle term', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week10', title: 'Week10', description: 'HTML Lists', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week11', title: 'Week11', description: 'HTML The class Attribute', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week12', title: 'Week12', description: 'HTML HTML The id Attribute, Iframes, JavaScript', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week13', title: 'Week13', description: 'HTML HTML File Paths, Head Element, Layout Elements and Techniques', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week14', title: 'Week14', description: 'HTML Layout Elements and Techniques, Responsive Web Design', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week15', title: 'Week15', description: 'HTML Responsive Web Design, Forms, Input Types', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week16', title: 'Week16', description: 'HTML Media', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week17', title: 'Week17', description: 'Final Term', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] },
                { path: '/course/week18', title: 'Week18', description: 'Web Design', tags: [{ text: 'HTML', bgcolor: 'bg-orange-500' }] }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.red-title {
  @apply text-red-600 text-6xl;
}
</style>
