import { storiesOf } from '@storybook/vue'
import TeamsFdbBlock1 from '~/components/froala-design-blocks/teams/FdbBlock1.vue'
import TeamsFdbBlock2 from '~/components/froala-design-blocks/teams/FdbBlock2.vue'
import TeamsFdbBlock3 from '~/components/froala-design-blocks/teams/FdbBlock3.vue'
import TeamsFdbBlock4 from '~/components/froala-design-blocks/teams/FdbBlock4.vue'
import TeamsFdbBlock5 from '~/components/froala-design-blocks/teams/FdbBlock5.vue'
import TeamsFdbBlock6 from '~/components/froala-design-blocks/teams/FdbBlock6.vue'
import TeamsFdbBlock7 from '~/components/froala-design-blocks/teams/FdbBlock7.vue'
import TeamsFdbBlock8 from '~/components/froala-design-blocks/teams/FdbBlock8.vue'


storiesOf('Teams', module)
    .add('FdbBlock1', () => ({
        components: { TeamsFdbBlock1 },
        template: '<TeamsFdbBlock1/>'
    }))
    .add('FdbBlock2', () => ({
        components: { TeamsFdbBlock2 },
        template: '<TeamsFdbBlock2/>'
    }))
    .add('FdbBlock3', () => ({
        components: { TeamsFdbBlock3 },
        template: '<TeamsFdbBlock3/>'
    }))
    .add('FdbBlock4', () => ({
        components: { TeamsFdbBlock4 },
        template: '<TeamsFdbBlock4/>'
    }))
    .add('FdbBlock5', () => ({
        components: { TeamsFdbBlock5 },
        template: '<TeamsFdbBlock5/>'
    }))
    .add('FdbBlock6', () => ({
        components: { TeamsFdbBlock6 },
        template: '<TeamsFdbBlock6/>'
    }))
    .add('FdbBlock7', () => ({
        components: { TeamsFdbBlock7 },
        template: '<TeamsFdbBlock7/>'
    }))
    .add('FdbBlock8', () => ({
        components: { TeamsFdbBlock8 },
        template: '<TeamsFdbBlock8/>'
    }))
