<script lang="ts">
    import { IconSize } from './Icon';

    export let icon: string = 'profile';
    export let size: IconSize = IconSize.RESPONSIVE;
</script>

<span class="icon icon-{icon} icon-size-{size}" />

<style>
    .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .icon-profile {
        background-image: url('/icons/user.png');
    }

    .icon-trend {
        background-image: url('/icons/trend.png');
    }

    .icon-document {
        background-image: url('/icons/document.png');
    }

    .icon-table-view {
        background-image: url('/icons/table-view.svg');
    }

    .icon-card-view {
        background-image: url('/icons/card-view.svg');
    }

    .icon-eye {
        background-image: url('/icons/eye.svg');
    }

    .icon-edit {
        background-image: url('/icons/edit.svg');
    }

    .icon-size-small {
        width: 15px;
        height: 15px;
    }

    .icon-size-medium {
        width: 25px;
        height: 25px;
    }

    .icon-size-huge {
        height: 100%;
    }
</style>