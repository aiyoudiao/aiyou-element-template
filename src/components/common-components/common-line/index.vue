<!--
 * @Descripttion: 通用折线图
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-08-26 00:49:22
 * @LastEditTime: 2020-08-30 20:17:50
 * @LastEditors: aiyoudiao
 * @FilePath: \code\src\components\common-components\common-line\index.vue
-->
<template>
<div class="common-line">
    <dv-loading v-if="loading" class="my-line-loading">努力加载中...</dv-loading>
    <template v-if="normal">
        <!-- 普通折线图 -->
        <ve-line :data="chartData" :extend="extendsData" />
    </template>
    <template v-else>
        <!-- 带阴影面积的折线图 -->
        <ve-line :data="chartData" :settings="chartSettings" :extend="extendsData" />

    </template>

</div>
</template>

<script>
export default {
    name: 'common-line',
    props: {
        normal: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: true
        },
        /* 列数据 */
        header: {
            type: [Array],
            default: () => ([])
        },
        /* 表格数据 */
        data: {
            type: [Array],
            default: () => ([])
        },
        settings: {
            type: [Object],
            default: () => ({
                stack: {
                    ['this.header[0]']: ['this.header[this.header.length - 1']
                },
                area: true
            })
        },
        extendConfig: {
            type: [Object],
            default: () => ({
                series: {
                    label: {
                        normal: {
                            show: false
                        }
                    }
                }
            })
        }
    },
    computed: {
        chartData() {
            const {
                header,
                data
            } = this;

            this.cleanLoading(data.length !== 0 && header.length !== 0)

            return {
                columns: header,
                rows: data,
            }
        },

        chartSettings() {
            const {
                settings
            } = this;

            return settings;
        },

        extendsData() {
            const {
                extendConfig
            } = this;

            return extendConfig;
        }
    },
    data() {
        return {}
    },
    watch: {

    },
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {

        /* 清空加载器 */
        cleanLoading(isClean) {
            if (isClean) {

                setTimeout(() => {
                    this.$emit('cleanLoading')
                }, 1000);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
/* 全局变量 */
$myTitle: 20px;
$myContent: 14px;
$tableHeight: 35px;

.common-line {
    position: relative;
}

.dv-loading.my-line-loading {
    position: absolute;
    z-index: 999999;
    background-color: rgba(256, 256, 256, 0.75);
    width: 100%;
    height: 100%;
}
</style>
