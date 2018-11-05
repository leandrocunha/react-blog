import { preview } from './../../utils';

describe('Utils', () => {
  it('preview post', () => {
    const str =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nulla velit, sodales varius luctus eu, pretium id mi. Curabitur aliquet, turpis vitae pharetra malesuada, dolor orci imperdiet enim, a consectetur nulla felis quis dui. Nam rhoncus porta risus at scelerisque. Nulla lobortis dapibus diam ac faucibus. Vivamus dui libero, egestas nec massa nec, euismod pellentesque lacus. Donec tortor neque, feugiat ac commodo ornare, maximus in velit. Sed suscipit, quam ut lobortis placerat, odio neque vulputate lorem, ac feugiat mauris est sit amet sem. Aenean elit ex, accumsan sit amet ex sit amet, condimentum aliquet nisl.';

    expect(preview(str).length).toEqual(103);
  });
});
