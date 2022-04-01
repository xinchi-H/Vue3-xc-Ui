import Dialog from "./dialog.vue";
import { createApp, h } from 'vue';

export const openDialog = (options) => {
  const { title, content, ok, cancel, closeOnClickOverlay } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  }
  const app = createApp({
    render() {
      return h(
        Dialog, {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if(newVisible === false) {
              close();
            }
          },
          closeOnClickOverlay,
          ok, cancel
        }, {
          title: () => title,
          content: () => content,
        }
      );
    }
  });
  app.mount(div);
}