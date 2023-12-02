import { Routes } from '@/router/routes';
import { __VLS_internalComponent } from './WelcomePage.vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_componentsOption = {};
let __VLS_name!: 'WelcomePage';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).header; ({} as __VLS_IntrinsicElements).header;
({} as __VLS_IntrinsicElements).h1; ({} as __VLS_IntrinsicElements).h1;
({} as __VLS_IntrinsicElements).nav; ({} as __VLS_IntrinsicElements).nav;
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{}, class: ("welcome-page page"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("welcome-page page"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["header"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).header;
({} as __VLS_IntrinsicElements).header;
const __VLS_7 = __VLS_6({ ...{}, class: ("welcome-page__header"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("welcome-page__header"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as __VLS_IntrinsicElements)["h1"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
({} as __VLS_IntrinsicElements).h1;
({} as __VLS_IntrinsicElements).h1;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["nav"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).nav;
({} as __VLS_IntrinsicElements).nav;
const __VLS_17 = __VLS_16({ ...{}, class: ("welcome-page__navigation"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("welcome-page__navigation"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_22 = __VLS_21({ ...{ onClick: {} as any, }, class: ("welcome-page__navigation-block"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("welcome-page__navigation-block"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_24['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onClick) };
__VLS_25 = {
click: $event => {
__VLS_ctx.$router.push(__VLS_ctx.Routes.ABOUT_ME);
}
};
{
const __VLS_26 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_28 = __VLS_27({ ...{}, to: ((__VLS_ctx.Routes.ABOUT_ME)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, to: ((__VLS_ctx.Routes.ABOUT_ME)), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
(__VLS_29.slots!).default;
}
(__VLS_23.slots!).default;
}
{
const __VLS_31 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_33 = __VLS_32({ ...{ onClick: {} as any, }, class: ("welcome-page__navigation-block"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("welcome-page__navigation-block"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
let __VLS_36 = { 'click': __VLS_pickEvent(__VLS_35['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_32, typeof __VLS_33>).onClick) };
__VLS_36 = {
click: $event => {
__VLS_ctx.$router.push(__VLS_ctx.Routes.PROJECTS);
}
};
{
const __VLS_37 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_38 = __VLS_elementAsFunctionalComponent(__VLS_37);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_39 = __VLS_38({ ...{}, to: ((__VLS_ctx.Routes.PROJECTS)), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_37, typeof __VLS_39> & Record<string, unknown>) => void)({ ...{}, to: ((__VLS_ctx.Routes.PROJECTS)), });
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
let __VLS_41!: __VLS_NormalizeEmits<typeof __VLS_40.emit>;
(__VLS_40.slots!).default;
}
(__VLS_34.slots!).default;
}
{
const __VLS_42 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_43 = __VLS_elementAsFunctionalComponent(__VLS_42);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_44 = __VLS_43({ ...{ onClick: {} as any, }, class: ("welcome-page__navigation-block"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_42, typeof __VLS_44> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("welcome-page__navigation-block"), });
const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44)!;
let __VLS_46!: __VLS_NormalizeEmits<typeof __VLS_45.emit>;
let __VLS_47 = { 'click': __VLS_pickEvent(__VLS_46['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_43, typeof __VLS_44>).onClick) };
__VLS_47 = {
click: $event => {
__VLS_ctx.$router.push(__VLS_ctx.Routes.CONTACTS);
}
};
{
const __VLS_48 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_50 = __VLS_49({ ...{}, to: ((__VLS_ctx.Routes.CONTACTS)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_50> & Record<string, unknown>) => void)({ ...{}, to: ((__VLS_ctx.Routes.CONTACTS)), });
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
let __VLS_52!: __VLS_NormalizeEmits<typeof __VLS_51.emit>;
(__VLS_51.slots!).default;
}
(__VLS_45.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[$router, Routes, Routes, Routes, $router, Routes, Routes, Routes, $router, Routes, Routes, Routes,];
return __VLS_slots;
}
