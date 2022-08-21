import { toast } from 'react-toastify';

export default function (
  promise,
  success = 'succès',
  pending = 'Envoi en cours...'
) {
  toast.promise(
    new Promise((resolve, reject) => {
      promise
        .then((res) => resolve(res))
        .catch((err) => {
          const { data } = err?.response;
          const error =
            data.message || data.error || 'Une erreur est survenue!';
          reject(error);
        });
    }),
    {
      pending,
      success,
      error: {
        render: ({ data }) => data
      }
    }
  );
}
