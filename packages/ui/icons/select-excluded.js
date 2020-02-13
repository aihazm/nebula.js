import SvgIcon from './SvgIcon';

const selectExcluded = props => ({
  ...props,
  shapes: [
    {
      type: 'path',
      attrs: {
        d:
          'M6,15.5 C6,15.2238576 6.22385763,15 6.5,15 L9.5,15 C9.77614237,15 10,15.2238576 10,15.5 C10,15.7761424 9.77614237,16 9.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M1,13.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L2.5,15 C2.77614237,15 3,15.2238576 3,15.5 C3,15.7761424 2.77614237,16 2.5,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,13.5 C-3.38176876e-17,13.2238576 0.223857625,13 0.5,13 C0.776142375,13 1,13.2238576 1,13.5 Z M15,13.5 C15,13.2238576 15.2238576,13 15.5,13 C15.7761424,13 16,13.2238576 16,13.5 L16,15 C16,15.5522847 15.5522847,16 15,16 L13.5,16 C13.2238576,16 13,15.7761424 13,15.5 C13,15.2238576 13.2238576,15 13.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,13.5 Z M1,6.5 L1,9.5 C1,9.77614237 0.776142375,10 0.5,10 C0.223857625,10 3.38176876e-17,9.77614237 0,9.5 L0,6.5 C-3.38176876e-17,6.22385763 0.223857625,6 0.5,6 C0.776142375,6 1,6.22385763 1,6.5 Z M16,6.5 L16,9.5 C16,9.77614237 15.7761424,10 15.5,10 C15.2238576,10 15,9.77614237 15,9.5 L15,6.5 C15,6.22385763 15.2238576,6 15.5,6 C15.7761424,6 16,6.22385763 16,6.5 Z M0,2.5 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L2.5,0 C2.77614237,-5.07265313e-17 3,0.223857625 3,0.5 C3,0.776142375 2.77614237,1 2.5,1 L1.5,1 C1.22385763,1 1,1.22385763 1,1.5 L1,2.5 C1,2.77614237 0.776142375,3 0.5,3 C0.223857625,3 3.38176876e-17,2.77614237 0,2.5 Z M6,0.5 C6,0.223857625 6.22385763,5.07265313e-17 6.5,0 L9.5,0 C9.77614237,-5.07265313e-17 10,0.223857625 10,0.5 C10,0.776142375 9.77614237,1 9.5,1 L6.5,1 C6.22385763,1 6,0.776142375 6,0.5 Z M15,2.5 L15,1.5 C15,1.22385763 14.7761424,1 14.5,1 L13.5,1 C13.2238576,1 13,0.776142375 13,0.5 C13,0.223857625 13.2238576,5.07265313e-17 13.5,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,2.5 C16,2.77614237 15.7761424,3 15.5,3 C15.2238576,3 15,2.77614237 15,2.5 Z M4,3 L12,3 C12.5522847,3 13,3.44771525 13,4 L13,12 C13,12.5522847 12.5522847,13 12,13 L4,13 C3.44771525,13 3,12.5522847 3,12 L3,4 C3,3.44771525 3.44771525,3 4,3 Z',
      },
    },
  ],
});
export default props => SvgIcon(selectExcluded(props));
export { selectExcluded };
