<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  Star, Github, Zap, Globe, Check, BellRing, Loader2, 
  FormInput, Component as LucideComponent, Database, LayoutDashboard 
} from 'lucide-vue-next'
import { getLocalTimeZone, today } from '@internationalized/date'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from '@/components/ui/dialog'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

import { launchConfetti } from '@/utils/rewards'

const { t } = useI18n()
console.log('HomeView mounted, locale:', useI18n().locale.value)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const date = ref<any>(today(getLocalTimeZone()))
const loading = ref(false)

const techStack = [
  { name: 'Vue.js', icon: 'V' },
  { name: 'Vite', icon: 'Vi' },
  { name: 'Tailwind CSS', icon: 'TW' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Pinia', icon: 'P' },
]

const onSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1500)
}

const celebrate = () => {
  launchConfetti()
}
</script>

<template>
  <div class="flex flex-col w-full">
    <!-- HERO SECTION -->
    <section class="relative py-20 md:py-32 overflow-hidden bg-background">
      <div class="container mx-auto px-4 relative z-10 text-center">
        
        <div
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500 }"
        >
          <Badge variant="outline" class="mb-6 py-1.5 px-4 text-sm border-primary/20 text-primary bg-primary/5 rounded-full">
            <span class="mr-2">🚀</span>
            <span>Template V4.0: Vue 3 + Tailwind 4</span>
          </Badge>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          :transition="{ delay: 200, duration: 500 }"
        >
          <h1 class="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent max-w-4xl mx-auto">
            {{ t('common.hero_title') }}
          </h1>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ delay: 400, duration: 500 }"
        >
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {{ t('common.hero_subtitle') }}
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ delay: 600, duration: 500 }"
        >
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              class="h-12 px-8 text-base rounded-full w-full sm:w-auto shadow-xl shadow-primary/20 transition-transform hover:scale-105"
              @click="celebrate"
            >
              {{ t('common.celebrate') }}
              <Star class="ml-2 h-4 w-4 fill-current" />
            </Button>

            <Button size="lg" variant="outline" class="h-12 px-8 text-base rounded-full w-full sm:w-auto">
              <Github class="mr-2 h-5 w-5" />
              {{ t('common.github_repo') }}
            </Button>
          </div>
        </div>

        <!-- Tech Stack -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 0.7 }"
          :transition="{ delay: 800, duration: 1000 }"
          class="mt-16 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        >
          <p class="text-sm text-muted-foreground mb-4 font-medium">{{ t('common.powered_by') }}</p>
          <div class="flex flex-wrap justify-center gap-8 items-center text-3xl text-foreground/80">
            <div v-for="tech in techStack" :key="tech.name" :title="tech.name" class="font-bold border p-2 rounded hover:text-primary transition-colors cursor-default">
              {{ tech.icon }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Separator />

    <!-- FEATURES SECTION -->
    <section class="py-20 bg-muted/30">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 class="text-3xl font-bold tracking-tight mb-4">
            {{ t('common.features_title') }}
          </h2>
          <p class="text-muted-foreground text-lg">
            {{ t('common.features_subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Feature 1 -->
          <div class="md:col-span-2" data-aos="fade-right">
            <Card class="bg-background border-none shadow-sm hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  <Zap class="h-6 w-6" />
                </div>
                <CardTitle>{{ t('common.feat1_title') }}</CardTitle>
                <CardDescription>{{ t('common.feat1_desc') }}</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md border border-dashed flex items-center justify-center text-muted-foreground">
                  <code class="text-sm bg-background p-2 rounded border">data-aos="fade-right"</code>
                </div>
              </CardContent>
            </Card>
          </div>

          <!-- Feature 2 -->
          <div data-aos="fade-left">
            <Card class="bg-background border-none shadow-sm hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                  <Globe class="h-6 w-6" />
                </div>
                <CardTitle>{{ t('common.feat2_title') }}</CardTitle>
                <CardDescription>{{ t('common.feat2_desc') }}</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-sm"><Check class="h-4 w-4 text-green-500" /> Preferences Store</div>
                  <div class="flex items-center gap-2 text-sm"><Check class="h-4 w-4 text-green-500" /> Auto Persistence</div>
                  <div class="flex items-center gap-2 text-sm"><Check class="h-4 w-4 text-green-500" /> Reactive locales</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING SECTION -->
    <section class="py-24 container mx-auto px-4">
      <div class="text-center mb-16" data-aos="zoom-in">
        <h2 class="text-3xl font-bold mb-4">
          {{ t('common.pricing_title') }}
        </h2>
        <p class="text-muted-foreground">
          {{ t('common.pricing_subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Startup Plan -->
        <div data-aos="fade-up" data-aos-delay="100">
          <Card class="hover:border-primary/50 transition-colors h-full flex flex-col">
            <CardHeader>
              <CardTitle>{{ t('common.plan_startup') }}</CardTitle>
              <div class="text-3xl font-bold mt-2">$0 <span class="text-sm font-normal text-muted-foreground">/mo</span></div>
              <CardDescription>Perfect for personal projects.</CardDescription>
            </CardHeader>
            <CardContent class="flex-1 text-sm text-muted-foreground">
              <ul class="space-y-2">
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> Single project</li>
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> Community support</li>
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> Basic analytics</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" class="w-full">{{ t('common.start_free') }}</Button>
            </CardFooter>
          </Card>
        </div>

        <!-- Pro Plan -->
        <div data-aos="fade-up" data-aos-delay="200">
          <Card class="border-primary shadow-2xl relative scale-105 z-10 h-full flex flex-col">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge class="bg-primary hover:bg-primary px-3 py-1">Most Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle>{{ t('common.plan_pro') }}</CardTitle>
              <div class="text-3xl font-bold mt-2">$29 <span class="text-sm font-normal text-muted-foreground">/mo</span></div>
              <CardDescription>For startups and small teams.</CardDescription>
            </CardHeader>
            <CardContent class="flex-1 text-sm text-muted-foreground">
              <ul class="space-y-2">
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> High performance</li>
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> Priority support</li>
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> Advanced features</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button class="w-full shadow-lg shadow-primary/25">{{ t('common.subscribe') }}</Button>
            </CardFooter>
          </Card>
        </div>

        <!-- Enterprise Plan -->
        <div data-aos="fade-up" data-aos-delay="300">
          <Card class="hover:border-primary/50 transition-colors h-full flex flex-col">
            <CardHeader>
              <CardTitle>{{ t('common.plan_enterprise') }}</CardTitle>
              <div class="text-3xl font-bold mt-2">$99 <span class="text-sm font-normal text-muted-foreground">/mo</span></div>
              <CardDescription>Built for large scale.</CardDescription>
            </CardHeader>
            <CardContent class="flex-1 text-sm text-muted-foreground">
              <ul class="space-y-2">
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> Custom solutions</li>
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> 24/7 Support</li>
                <li class="flex items-center"><Check class="mr-2 h-4 w-4 text-primary" /> Full control</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" class="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="py-20 bg-muted/30">
      <div class="container mx-auto px-4 max-w-3xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-center mb-10">
          {{ t('common.faq_title') }}
        </h2>
        <Accordion type="single" collapsible class="w-full bg-background rounded-xl border px-4 shadow-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>{{ t('common.faq_q1') }}</AccordionTrigger>
            <AccordionContent>
              {{ t('common.faq_a1') }}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{{ t('common.faq_q2') }}</AccordionTrigger>
            <AccordionContent>
              {{ t('common.faq_a2') }}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" class="border-b-0">
            <AccordionTrigger>{{ t('common.faq_q3') }}</AccordionTrigger>
            <AccordionContent>
              {{ t('common.faq_a3') }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-24 container mx-auto px-4">
      <div class="bg-primary text-primary-foreground rounded-3xl p-12 text-center relative overflow-hidden" data-aos="zoom-in-up">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold">
            {{ t('common.cta_title') }}
          </h2>
          <p class="text-primary-foreground/80 text-lg">
            {{ t('common.cta_subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="secondary" size="lg" class="rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all">
              {{ t('common.download') }}
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPONENT GALLERY -->
    <section class="py-16 bg-muted/20 border-t" id="components">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between mb-8" data-aos="fade-right">
          <h2 class="text-2xl font-bold tracking-tight">
            {{ t('common.gallery_title') }}
          </h2>
        </div>

        <Tabs default-value="forms" class="space-y-8" data-aos="fade-up">
          <TabsList class="grid w-full grid-cols-2 lg:grid-cols-4 bg-muted/50 p-1">
            <TabsTrigger value="forms" class="gap-2"><FormInput class="h-4 w-4" /> {{ t('common.tabs_forms') }}</TabsTrigger>
            <TabsTrigger value="interactive" class="gap-2"><LucideComponent class="h-4 w-4" /> {{ t('common.tabs_interactive') }}</TabsTrigger>
            <TabsTrigger value="data" class="gap-2"><Database class="h-4 w-4" /> {{ t('common.tabs_data') }}</TabsTrigger>
            <TabsTrigger value="layout" class="gap-2"><LayoutDashboard class="h-4 w-4" /> {{ t('common.tabs_layout') }}</TabsTrigger>
          </TabsList>

          <TabsContent value="forms" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader><CardTitle>{{ t('common.login_example') }}</CardTitle></CardHeader>
              <CardContent class="space-y-4">
                <div class="space-y-2">
                  <Label>{{ t('common.email') }}</Label>
                  <Input placeholder="user@example.com" />
                </div>
                <div class="space-y-2">
                  <Label>{{ t('common.password') }}</Label>
                  <Input type="password" />
                </div>
                <Button class="w-full" @click="onSubmit" :disabled="loading">
                  <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin" />
                  {{ t('common.sign_in') }}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>{{ t('common.settings') }}</CardTitle></CardHeader>
              <CardContent class="space-y-6">
                <div class="flex items-center justify-between">
                  <Label for="notifications-mode">{{ t('common.notifications') }}</Label>
                  <Switch id="notifications-mode" />
                </div>
                <div class="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label for="newsletter">{{ t('common.newsletter') }}</Label>
                </div>
                <Separator />
                <div class="space-y-2">
                  <Label>{{ t('common.volume') }}</Label>
                  <Slider :default-value="[75]" :max="100" :step="1" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Selection Demo</CardTitle></CardHeader>
              <CardContent class="space-y-6">
                <div class="space-y-2">
                  <Label>Stack</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vue">Vue 3</SelectItem>
                      <SelectItem value="vite">Vite</SelectItem>
                      <SelectItem value="tailwind">Tailwind 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <RadioGroup default-value="comfortable">
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label for="r1">Default</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label for="r2">Comfortable</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactive" class="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Overlays</CardTitle>
                <CardDescription>Dialogs and Popovers for interaction.</CardDescription>
              </CardHeader>
              <CardContent class="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger as-child><Button variant="outline">Open Dialog</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirmation</DialogTitle>
                      <DialogDescription>Are you sure you want to continue?</DialogDescription>
                    </DialogHeader>
                    <DialogFooter><Button>Confirm</Button></DialogFooter>
                  </DialogContent>
                </Dialog>

                <Popover>
                  <PopoverTrigger as-child><Button variant="secondary">Open Popover</Button></PopoverTrigger>
                  <PopoverContent class="w-80">
                    <div class="grid gap-4">
                      <div class="space-y-2">
                        <h4 class="font-medium leading-none">Settings</h4>
                        <p class="text-sm text-muted-foreground">Adjust your preferences.</p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <Alert>
                  <BellRing class="h-4 w-4" />
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>System updated successfully.</AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" class="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader><CardTitle>Data Table</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead class="w-[100px]">ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead class="text-right">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell class="font-medium">INV001</TableCell>
                      <TableCell><Badge variant="outline">Paid</Badge></TableCell>
                      <TableCell class="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell class="font-medium">INV002</TableCell>
                      <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                      <TableCell class="text-right">$150.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Selection & Progress</CardTitle></CardHeader>
              <CardContent class="space-y-6">
                <div class="flex justify-center border rounded-lg p-2 bg-card">
                  <Calendar mode="single" v-model="date" class="rounded-md" />
                </div>
                <div class="space-y-2">
                  <div class="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>66%</span>
                  </div>
                  <Progress :model-value="66" class="w-full" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="layout" class="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader><CardTitle>Standard Card</CardTitle></CardHeader>
              <CardContent>Basic content.</CardContent>
            </Card>
            <Card class="bg-muted/50 border-dashed">
              <CardHeader><CardTitle>Dashed Card</CardTitle></CardHeader>
              <CardContent>For drop areas.</CardContent>
            </Card>
            <Card class="bg-primary text-primary-foreground">
              <CardHeader><CardTitle>Highlight Card</CardTitle></CardHeader>
              <CardContent>Visual emphasis.</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  </div>
</template>
