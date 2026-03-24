const STORAGE_KEY = "unyfer_admin_session";

export const getStoredAdminSession = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed?.token || !parsed?.expiresAt) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
};

export const storeAdminSession = ({ token, admin, expiresInHours }) => {
  const expiresAt = Date.now() + Number(expiresInHours || 24) * 60 * 60 * 1000;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      token,
      admin,
      expiresAt,
    })
  );
};

export const clearAdminSession = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getAdminToken = () => {
  const session = getStoredAdminSession();
  if (!session) return null;

  if (session.expiresAt <= Date.now()) {
    clearAdminSession();
    return null;
  }

  return session.token;
};

export const hasActiveAdminSession = () => Boolean(getAdminToken());
