/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ReactElement } from 'react';
import { Plugin } from '@phuocng/rpv';
import { DownloadProps } from '@phuocng/rpv-download';
import { EnterFullScreenProps } from '@phuocng/rpv-full-screen';
import { OpenProps } from '@phuocng/rpv-open';
import { PrintProps } from '@phuocng/rpv-print';
import { ZoomInProps, ZoomOutProps } from '@phuocng/rpv-zoom';

export interface ToolbarSlot {
    currentPage: ReactElement;
    currentScale: ReactElement;
    currentPageInput: ReactElement;
    Download(props: DownloadProps): ReactElement;
    EnterFullScreen(props: EnterFullScreenProps): ReactElement;
    goToFirstPage: ReactElement;
    goToLastPage: ReactElement;
    nextPage: ReactElement;
    numberOfPages: ReactElement;
    Open(props: OpenProps): ReactElement;
    previousPage: ReactElement;
    Print(props: PrintProps): ReactElement;
    ZoomIn(props: ZoomInProps): ReactElement;
    ZoomOut(props: ZoomOutProps): ReactElement;
    zoomPopover: ReactElement;
}

export type RenderToolbarSlot = (toolbarSlot: ToolbarSlot) => ReactElement;
export type RenderToolbar = (renderToolbar: RenderToolbarSlot) => ReactElement;

export interface ToolbarProps {
    children?: RenderToolbarSlot;
}

export interface ToolbarPlugin extends Plugin {
    Toolbar: (props: ToolbarProps) => ReactElement;
}

export default function toolbarPlugin(): ToolbarPlugin;